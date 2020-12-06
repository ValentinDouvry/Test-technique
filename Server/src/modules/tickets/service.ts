import { ITicket } from './model';
import tickets from './schema';

export default class TicketService {
    
    public createTicket(ticket_params: ITicket, callback: any) {
        const _session = new tickets(ticket_params);
        _session.save(callback);
    }

    public filterTicket(query: any, callback: any) {
        tickets.findOne(query, callback);
    }

    public updateTicket(ticket_params: ITicket, callback: any) {
        const query = { _id: ticket_params._id };
        tickets.findOneAndUpdate(query, ticket_params, callback);
    }
    
    public deleteTicket(_id: String, callback: any) {
        const query = { _id: _id };
        tickets.deleteOne(query, callback);
    }

    public findAllTickets(query: any, callback: any) {
        tickets.find(query,callback);
    }

}