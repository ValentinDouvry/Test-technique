import * as express from "express";
var path = require('path');
export class CommonRoutes {
   public route(app: express.Application) {


      var swaggerUi = require('swagger-ui-express'),
         swaggerDocument = require('../../swagger.json');

      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
      // Mismatch URL
      /* app.all('*', function (req: Request, res: Response) {
         res.status(404).send({ error: true, message: 'Check your URL please' });
      }); */
      app.use(express.static('Client'));

      app.get('/ticket/', async (req, res) => {
         res.sendFile(path.join(__dirname, '../../Client', 'ticket.html'));
      });

      app.get('/add_ticket', async (req, res) => {
         res.sendFile(path.join(__dirname, '../../Client', 'add_ticket.html'));
      });
      

      app.all('*', async (req, res) => {
         res.sendFile(path.join(__dirname, '../../Client', 'index.html'));
      });

      


   }
}