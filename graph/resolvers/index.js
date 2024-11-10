import { userResolvers } from "./user.resolvers.js";
import { productResolvers } from "./product.resolvers.js";
import { commentResolvers } from "./comment.resolvers.js";

const resolvers = {
    Query: {
        users: userResolvers.users,
        products: productResolvers.products,
        comments: commentResolvers.comments,
    }
};

export default resolvers;