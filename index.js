const express = require('express')();
const next = require('next');

// Load environment variables from .env file if present
const result = require('dotenv').load();

process.on('uncaughtException', err => {});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection: Promise:', p, 'Reason:', reason);
});

// Default when run with `npm start` is 'production' and default port is '80'
// `npm run dev` defaults mode to 'development' & port to '3000'
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || 80;

const app = next({
  dir: '.',
  dev: process.env.NODE_ENV === 'development'
});

app.prepare().then(() => {
  // Default catch-all handler to allow Next.js to handle all other routes
  express.all('*', (req, res) => {
    const nextRequestHandler = app.getRequestHandler();
    return nextRequestHandler(req, res);
  });
  express.listen(process.env.PORT, err => {
    if (err) {
      throw err;
    }
    console.log(
      `> Ready on http://localhost:${process.env.PORT} [${process.env
        .NODE_ENV}]`
    );
  });
});
