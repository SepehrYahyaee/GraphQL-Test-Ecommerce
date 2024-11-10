import { commentService } from "../../services/index.js";

export const commentResolvers = {
    async comments() {
        return await commentService.retrieveAllComments();
    }
}