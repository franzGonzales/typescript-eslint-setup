import type { Application } from 'express';
import express from 'express';

class Server {
  
  app: Application;

  constructor() {
    this.app = express();
  }

  start() {  
    this.app.listen(3000, void console.log('Server started on port 3000'));
  }

}

new Server().start();
