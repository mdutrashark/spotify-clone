import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor está sendo executado na porta ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Home");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
