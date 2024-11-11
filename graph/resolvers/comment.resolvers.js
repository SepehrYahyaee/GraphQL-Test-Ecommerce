import { commentService } from "../../services/index.js";

export const commentResolvers = {
    async getAllComments() {
        return await commentService.retrieveAllComments();
    },
    async getSpecificComment(parent, args, context) {
        return await commentService.retrieveSpecificComment(+args.id);
    }
}