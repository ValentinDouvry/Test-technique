"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
const express = require("express");
var path = require('path');
class CommonRoutes {
    route(app) {
        var swaggerUi = require('swagger-ui-express'), swaggerDocument = require('../../swagger.json');
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        // Mismatch URL
        /* app.all('*', function (req: Request, res: Response) {
           res.status(404).send({ error: true, message: 'Check your URL please' });
        }); */
        app.use(express.static('Client'));
        app.get('/ticket/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path.join(__dirname, '../../Client', 'ticket.html'));
        }));
        app.get('/add_ticket', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path.join(__dirname, '../../Client', 'add_ticket.html'));
        }));
        app.all('*', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path.join(__dirname, '../../Client', 'index.html'));
        }));
    }
}
exports.CommonRoutes = CommonRoutes;
