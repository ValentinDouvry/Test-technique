import { Application, Request, Response } from 'express';
import { TicketController } from '../controllers/ticketController';

export class TicketsRoutes {

    private ticket_controller: TicketController = new TicketController();

    public route(app: Application) {
        
        app.post('/api/ticket', (req: Request, res: Response) => {
            this.ticket_controller.create_ticket(req, res);
        });

        app.get('/api/tickets', (req: Request, res: Response) => {
            this.ticket_controller.get_tickets(req, res);
        });

        app.get('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticket_controller.get_ticket(req, res);
        });

        app.put('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticket_controller.update_ticket(req, res);
        });

        app.delete('/api/ticket/:id', (req: Request, res: Response) => {
            this.ticket_controller.delete_ticket(req, res);
        });



    }
}