import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    subject: String,
    type: String,
    severity: String,
    priority: String,
    description: String,
    status: String,
    modification_notes: [ModificationNote]
});

export default mongoose.model('tickets', schema);