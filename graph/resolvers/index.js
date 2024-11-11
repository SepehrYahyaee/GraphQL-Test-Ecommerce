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
    },
    User: {
        comments: commentResolvers.getAllCommentsByUser,
        products: productResolvers.getAllProductsByUser,
    },
    Product: {
        user: userResolvers.getSpecificUserFromProduct,
        comments: commentResolvers.getAllCommentsOnProduct,
    },
    Comment: {
        user: userResolvers.getSpecificUserFromComment,
        product: productResolvers.getSpecificProductByComment,
    },
    Mutation: {
        register: userResolvers.register,
    }
};

export default resolvers;