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
        login: userResolvers.login,
        updateUser: userResolvers.updateUser,
        deleteAccount: userResolvers.deleteUser,
        createProduct: productResolvers.createProduct,
        updateProduct: productResolvers.updateProduct,
        deleteProduct: productResolvers.deleteProduct,
        createComment: commentResolvers.createComment,
        updateComment: commentResolvers.updateComment,
        deleteComment: commentResolvers.deleteComment,
    }
};

export default resolvers;