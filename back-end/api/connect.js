import { MongoClient } from "mongodb";
import "dotenv/config";

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("spotify-clone");
