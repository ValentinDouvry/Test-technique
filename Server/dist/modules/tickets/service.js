"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class TicketService {
    createTicket(ticket_params, callback) {
        const _session = new schema_1.default(ticket_params);
        _session.save(callback);
    }
    filterTicket(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    updateTicket(ticket_params, callback) {
        const query = { _id: ticket_params._id };
        schema_1.default.findOneAndUpdate(query, ticket_params, callback);
    }
    deleteTicket(_id, callback) {
        const query = { _id: _id };
        schema_1.default.deleteOne(query, callback);
    }
    findAllTickets(query, callback) {
        schema_1.default.find(query, callback);
    }
}
exports.default = TicketService;
