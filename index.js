import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graph/schemas/index.js";
import resolvers from "./graph/resolvers/index.js";

const app = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(app, { listen: { port: process.env.PORT } });
console.log("Server is running on port:", url);