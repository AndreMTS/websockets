import express from "express";
import url from "url";
import path from "path";
import http from "http";
const app = express();
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => {
  console.log(`Serving on http://localhost:${port}`);
});

const io = new Server(servidorHttp);

io.on("connection", () => {
  console.log(`Um cliente se conectou!`);
});
