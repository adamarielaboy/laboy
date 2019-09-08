const next = require('next');
const express = require('express');

const routes = require('next-routes')();

const port = process.env.PORT || 3000;

routes
  .add('index', '/')
  .add('enroute', '/projects/enroute')
  .add('odyssey', '/projects/odyssey');

const app = next({ dev: false });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(handler).listen(port);

  console.log(`Connected to ${port}`);
})