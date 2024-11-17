import prisma from "../db.js";

export const commentService = {
    retrieveAllComments() {
        return prisma.comment.findMany({});
    },
    retrieveSpecificComment(id) {
        return prisma.comment.findUnique({ where: { id }});
    },
    retrieveAllCommentsByUser(userId) {
        return prisma.comment.findMany({
            where: {
                byUser: userId,
            }
        })
    },
    retrieveAllCommentsOnProduct(productId) {
        return prisma.comment.findMany({
            where: {
                onProduct: productId,
            }
        });
    },
    insertComment(data) {
        return prisma.comment.create({
            data,
        });
    },
    modifyComment(id, data) {
        return prisma.comment.update({
            where: {
                id,
            },
            data,
        });
    },
    removeComment(id) {
        return prisma.comment.delete({
            where: {
                id,
            }
        });
    },
};