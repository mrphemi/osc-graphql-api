import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import "dotenv/config";

import db from "./db/connection";

import schema from "./schema";
import resolvers from "./resolvers";

db.sync().then(() => {
  console.log("connected to db");
});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) },
});

console.log(`🚀 Server ready at ${url}`);
