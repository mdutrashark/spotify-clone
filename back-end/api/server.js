import express from "express";
import { db } from "./connect.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor está sendo executado na porta ${PORT}`);
});

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Home");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../../front-end/dist/index.html"));
});
