//lib/config/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { TicketsRoutes } from "../routes/ticketRoutes";
import { CommonRoutes } from "../routes/commonRoutes";
class App {
   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/db_tickets';

   private routes: TicketsRoutes = new TicketsRoutes();
   private commonRoutes: CommonRoutes = new CommonRoutes();
   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.routes.route(this.app);
      this.commonRoutes.route(this.app);
   }
   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }
}
export default new App().app;