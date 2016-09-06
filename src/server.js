import http from "http";
import path from "path";
import express from "express";
import compress from "compression";
import client from "./app";
const app = express();

app
.use(compress())
.use("/static", express.static(path.join(__dirname, "../static"),  {maxAge: 365 * 24 * 60 * 60} ))
.get("*", (req, res) =>	res.status(200).send(client.toString(req.url)))


http
.createServer(app)
.listen(80, err => console.log( err ? err : "Listening at port 80" ));
