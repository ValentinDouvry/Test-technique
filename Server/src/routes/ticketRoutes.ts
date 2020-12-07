import { Application, Request, Response } from 'express';
import { TicketController } from '../controllers/ticketController';

export class TicketsRoutes {

    private ticketController: TicketController = new TicketController();

    public route(app: Application) {
        
        app.post('/api/ticket', (req: Request, res: Response) => {
            this.ticketController.createTicket(req, res);
        });

        app.get('/api/tickets', (req: Request, res: Response) => {
            this.ticketController.getTickets(req, res);
        });

        app.get('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticketController.getTicket(req, res);
        });

        app.put('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticketController.updateTicket(req, res);
        });

        app.delete('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticketController.deleteTicket(req, res);
        });



    }
}