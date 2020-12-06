"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsRoutes = void 0;
const ticketController = require("../controllers/ticketController");
class TicketsRoutes {
    constructor() {
        this.ticket_controller = new ticketController.ticketController();
    }
    route(app) {
        app.post('/api/ticket', (req, res) => {
            this.ticket_controller.create_ticket(req, res);
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
