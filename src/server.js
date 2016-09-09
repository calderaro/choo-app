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

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app
.use(compress())
.use("/static", express.static(path.join(__dirname, "../static"),  {maxAge: 365 * 24 * 60 * 60} ))
.get("*", (req, res) =>	res.status(200).send(client.toString(req.url)))

http
.createServer(app)
.listen(3000, err => console.log( err ? err : "Listening at port 3000" ));
