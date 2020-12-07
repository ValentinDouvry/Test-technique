"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class TicketService {
    createTicket(ticketParams, callback) {
        const _session = new schema_1.default(ticketParams);
        _session.save(callback);
    }
    filterTicket(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    updateTicket(ticketParams, callback) {
        const query = { _id: ticketParams._id };
        schema_1.default.findOneAndUpdate(query, ticketParams, callback);
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
