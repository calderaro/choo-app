import http from "http";
import path from "path";
import express from "express";
import compress from "compression";
import client from "./app";
import webpack from "webpack";

import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../configs/webpack.config.dev";

const compiler = webpack(webpackConfig);
const app = express();

if(true){
  app.use(webpackDevMiddleware(compiler, { /*quiet: true,*/ publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler/*, { log: () => {} }*/))
}

app
.use(compress())
.use("/static", express.static(path.join(__dirname, "../static"),  {maxAge: 365 * 24 * 60 * 60} ))
.get("*", (req, res) =>	res.status(200).send(client.toString(req.url)))


http
.createServer(app)
.listen(80, err => console.log( err ? err : "Listening at port 80" ));
