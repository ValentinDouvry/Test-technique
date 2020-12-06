"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsRoutes = void 0;
const ticketController_1 = require("../controllers/ticketController");
class TicketsRoutes {
    constructor() {
        this.ticket_controller = new ticketController_1.TicketController();
    }
    route(app) {
        app.post('/api/ticket', (req, res) => {
            this.ticket_controller.create_ticket(req, res);
        });
        app.get('/api/tickets', (req, res) => {
            this.ticket_controller.get_tickets(req, res);
        });
        app.get('/api/ticket/:id', (req, res) => {
            this.ticket_controller.get_ticket(req, res);
        });
        app.put('/api/ticket/:id', (req, res) => {
            this.ticket_controller.update_ticket(req, res);
        });
        app.delete('/api/ticket/:id', (req, res) => {
            this.ticket_controller.delete_ticket(req, res);
        });
    }
}
exports.TicketsRoutes = TicketsRoutes;
