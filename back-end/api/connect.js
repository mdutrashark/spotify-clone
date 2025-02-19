import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://mdutrashark:uZpaRZwWX8SBEe2K@cluster0.qbvz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-clone");
