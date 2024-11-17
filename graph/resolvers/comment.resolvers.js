import { GraphQLError } from "graphql";
import { commentService } from "../../services/index.js";

export const commentResolvers = {
    async getAllComments(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        return await commentService.retrieveAllComments();
    },
    async getSpecificComment(parent, args, context) {
        return await commentService.retrieveSpecificComment(+args.id);
    },
    async getAllCommentsByUser(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        return await commentService.retrieveAllCommentsByUser(parent.id);
    },
    async getAllCommentsOnProduct(parent, args, context) {
        return await commentService.retrieveAllCommentsOnProduct(+parent.id);
    },
    async createComment(parent, args, context) {        
        return await commentService.insertComment({ ...args.createCommentObject, byUser: context.userId });
    },
    async updateComment(parent, args, context) {
        if (context.role === "ADMIN" || context.role === "SUPERADMIN") return await commentService.modifyComment(+args.id, args.updateObject);

        const comment = await commentService.retrieveSpecificComment(+args.id);

        if (comment.byUser === context.userId) return await commentService.modifyComment(+args.id, args.updateObject);

        throw new GraphQLError("You are not the author of this comment, nor an admin to be able to edit this.");
    },
    async deleteComment(parent, args, context) {
        if (context.role === "ADMIN" || context.role === "SUPERADMIN") return await commentService.removeComment(+args.id);

        const comment = await commentService.retrieveSpecificComment(+args.id);

        if (comment.byUser === context.userId) return await commentService.removeComment(+args.id);

        throw new GraphQLError("You are not the author of this comment, nor an admin to be able to edit this.");
    },
}