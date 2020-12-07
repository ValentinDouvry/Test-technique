"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lib/config/app.ts
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ticketRoutes_1 = require("../routes/ticketRoutes");
const commonRoutes_1 = require("../routes/commonRoutes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/db_tickets';
        this.routes = new ticketRoutes_1.TicketsRoutes();
        this.commonRoutes = new commonRoutes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routes.route(this.app);
        this.commonRoutes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
