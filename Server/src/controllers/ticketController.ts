import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { ITicket } from '../modules/tickets/model';
import TicketService from '../modules/tickets/service';
import e = require('express');

export class TicketController {

    private ticket_service: TicketService = new TicketService();

    public create_ticket(req: Request, res: Response) {
        if (req.body.subject && req.body.type && req.body.severity && req.body.priority &&
            req.body.description &&
            req.body.status) {
            const ticket_params: ITicket = {
                subject: req.body.subject,
                type: req.body.type,
                severity: req.body.severity,
                priority: req.body.priority,
                description: req.body.description,
                status: req.body.status,
                modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New ticket created'
                }]
            };
            this.ticket_service.createTicket(ticket_params, (err: any, ticket_data: ITicket) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create ticket successfull', ticket_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public get_ticket(req: Request, res: Response) {
        if (req.params.id) {
            const ticket_filter = { _id: req.params.id };
            this.ticket_service.filterTicket(ticket_filter, (err: any, ticket_data: ITicket) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get ticket successfull', ticket_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public update_ticket(req: Request, res: Response) {
        if (req.params.id &&
            req.body.subject || req.body.type || req.body.severity || req.body.priority ||
            req.body.description ||
            req.body.status) {
            const ticket_filter = { _id: req.params.id };
            this.ticket_service.filterTicket(ticket_filter, (err: any, ticket_data: ITicket) => {
                if (err) {
                    mongoError(err, res);
                } else if (ticket_data) {
                    ticket_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'Ticket data updated'
                    });
                    const ticket_params: ITicket = {
                        _id: req.params.id,
                        subject: req.body.subject ? req.body.subject: ticket_data.subject,
                        type: req.body.type ? req.body.type : ticket_data.type,
                        severity: req.body.severity ? req.body.severity : ticket_data.severity,
                        priority: req.body.priority ? req.body.priority : ticket_data.priority,
                        description: req.body.description ? req.body.description : ticket_data.description,
                        status: req.body.status ? req.body.status : ticket_data.status,
                        modification_notes: ticket_data.modification_notes
                    };
                    this.ticket_service.updateTicket(ticket_params, (err: any) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                            successResponse('update ticket successfull', null, res);
                        }
                    });
                } else {
                    failureResponse('invalid ticket', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public delete_ticket(req: Request, res: Response) {
        if (req.params.id) {
            this.ticket_service.deleteTicket(req.params.id, (err: any, delete_details) => {
                if (err) {
                    mongoError(err, res);
                } else if (delete_details.deletedCount !== 0) {
                    successResponse('delete ticket successfull', null, res);
                } else {
                    failureResponse('invalid ticket', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public get_tickets(req: Request, res: Response) {

        this.ticket_service.findAllTickets(req.params, (err: any, tickets_data: ITicket) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('get tickets successfull', tickets_data, res);
            }
        });

    }

}