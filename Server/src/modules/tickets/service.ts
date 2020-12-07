import { ITicket } from './model';
import tickets from './schema';

export default class TicketService {
    
    public createTicket(ticketParams: ITicket, callback: any) {
        const _session = new tickets(ticketParams);
        _session.save(callback);
    }

    public filterTicket(query: any, callback: any) {
        tickets.findOne(query, callback);
    }

    public updateTicket(ticketParams: ITicket, callback: any) {
        const query = { _id: ticketParams._id };
        tickets.findOneAndUpdate(query, ticketParams, callback);
    }
    
    public deleteTicket(_id: String, callback: any) {
        const query = { _id: _id };
        tickets.deleteOne(query, callback);
    }

    public findAllTickets(query: any, callback: any) {
        tickets.find(query,callback);
    }

}