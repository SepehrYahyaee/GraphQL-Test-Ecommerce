import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import JWT from "jsonwebtoken";
import typeDefs from "./graph/schemas/index.js";
import resolvers from "./graph/resolvers/index.js";
import { userService } from "./services/user.service.js";

const app = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(app, { listen: { port: process.env.PORT }, context: async ({ req, res }) => {
    const token = req.headers?.authorization || "";

    if (token) {
        const payload = JWT.verify(token, process.env.SECRET_KEY);
        const user = await userService.retrieveSpecificUser(payload.id);
        return { userId: user.id, userName: user.userName, role: user.role };
    }
} 
});

console.log("Server is running on port:", url);