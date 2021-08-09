import express from "express";
const app = express();
const port = 5050; // default port to listen

import { Logger } from "tslog";

const log: Logger = new Logger();

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  log.info(`Running server on http://localhost:${port}`);
});
