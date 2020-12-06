"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../common/model");
const Schema = mongoose.Schema;
const schema = new Schema({
    subject: String,
    type: String,
    severity: String,
    priority: String,
    description: String,
    status: String,
    modification_notes: [model_1.ModificationNote]
});
exports.default = mongoose.model('tickets', schema);
