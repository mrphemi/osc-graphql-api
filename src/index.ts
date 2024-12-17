import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import JWT from "jsonwebtoken";

import config from "./config";

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
  listen: { port: Number(config.port) },
  context: async ({ req }) => {
    // get bearer token with format "Bearer long-token"
    const bearer = req.headers.authorization || "";
    // extract just the token
    const token = bearer.split(" ")[1];

    // return jwt payload when valid else return empty obj
    try {
      const user = JWT.verify(token, config.jwt_secret);
      return { user };
    } catch (error) {
      return {};
    }
  },
});

console.log(`🚀 Server ready at ${url}`);
