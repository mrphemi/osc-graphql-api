import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import JWT from "jsonwebtoken";

import config from "./config";

import db from "./db/connection";

import schema from "./schema";
import resolvers from "./resolvers";

async function startServer() {
  try {
    // Sync database
    await db.sync();
    console.log("Connected to db");

    const server = new ApolloServer({
      typeDefs: schema,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: Number(config.port) },
      context: async ({ req }) => {
        const bearer = req.headers.authorization || "";
        const token = bearer.split(" ")[1];

        try {
          const user = JWT.verify(token, config.jwt_secret);
          return { user };
        } catch (error) {
          return {};
        }
      },
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
