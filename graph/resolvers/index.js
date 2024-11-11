import { userResolvers } from "./user.resolvers.js";
import { productResolvers } from "./product.resolvers.js";
import { commentResolvers } from "./comment.resolvers.js";

const resolvers = {
    Query: {
        users: userResolvers.getAllUsers,
        user: userResolvers.getSpecificUser,
        products: productResolvers.getAllProducts,
        product: productResolvers.getSpecificProduct,
        comments: commentResolvers.getAllComments,
        comment: commentResolvers.getSpecificComment,
    }
};

export default resolvers;