import prisma from "../db.js";

export const commentService = {
    retrieveAllComments() {
        return prisma.comment.findMany({});
    },
};