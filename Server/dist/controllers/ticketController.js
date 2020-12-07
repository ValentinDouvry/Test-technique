"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/tickets/service");
class TicketController {
    constructor() {
        this.ticket_service = new service_2.default();
    }
    createTicket(req, res) {
        if (req.body.subject && req.body.type && req.body.severity && req.body.priority &&
            req.body.description &&
            req.body.status) {
            const ticket_params = {
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
            this.ticket_service.createTicket(ticket_params, (err, ticket_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('create ticket successfull', ticket_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    getTicket(req, res) {
        if (req.params.id) {
            const ticket_filter = { _id: req.params.id };
            this.ticket_service.filterTicket(ticket_filter, (err, ticket_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get ticket successfull', ticket_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    updateTicket(req, res) {
        if (req.params.id &&
            req.body.subject || req.body.type || req.body.severity || req.body.priority ||
            req.body.description ||
            req.body.status) {
            const ticket_filter = { _id: req.params.id };
            this.ticket_service.filterTicket(ticket_filter, (err, ticket_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (ticket_data) {
                    ticket_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'Ticket data updated'
                    });
                    const ticket_params = {
                        _id: req.params.id,
                        subject: req.body.subject ? req.body.subject : ticket_data.subject,
                        type: req.body.type ? req.body.type : ticket_data.type,
                        severity: req.body.severity ? req.body.severity : ticket_data.severity,
                        priority: req.body.priority ? req.body.priority : ticket_data.priority,
                        description: req.body.description ? req.body.description : ticket_data.description,
                        status: req.body.status ? req.body.status : ticket_data.status,
                        modification_notes: ticket_data.modification_notes
                    };
                    this.ticket_service.updateTicket(ticket_params, (err) => {
                        if (err) {
                            service_1.mongoError(err, res);
                        }
                        else {
                            service_1.successResponse('update ticket successfull', null, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse('invalid ticket', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    deleteTicket(req, res) {
        if (req.params.id) {
            this.ticket_service.deleteTicket(req.params.id, (err, delete_details) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse('delete ticket successfull', null, res);
                }
                else {
                    service_1.failureResponse('invalid ticket', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    getTickets(req, res) {
        this.ticket_service.findAllTickets(req.params, (err, tickets_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('get tickets successfull', tickets_data, res);
            }
        });
    }
}
exports.TicketController = TicketController;
