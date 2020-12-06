import { ModificationNote } from "../common/model";

export interface ITicket {
    _id?: String;
    subject: String;
    type: String;
    severity: String;
    priority: String;
    description: String;
    status: String;
    modification_notes: ModificationNote[]
}