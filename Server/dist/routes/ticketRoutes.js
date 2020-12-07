"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsRoutes = void 0;
const ticketController_1 = require("../controllers/ticketController");
class TicketsRoutes {
    constructor() {
        this.ticketController = new ticketController_1.TicketController();
    }
    route(app) {
        app.post('/api/ticket', (req, res) => {
            this.ticketController.createTicket(req, res);
        });
        app.get('/api/tickets', (req, res) => {
            this.ticketController.getTickets(req, res);
        });
        app.get('/api/ticket/:id', (req, res) => {
            this.ticketController.getTicket(req, res);
        });
        app.put('/api/ticket/:id', (req, res) => {
            this.ticketController.updateTicket(req, res);
        });
        app.delete('/api/ticket/:id', (req, res) => {
            this.ticketController.deleteTicket(req, res);
        });
    }
}
exports.TicketsRoutes = TicketsRoutes;
