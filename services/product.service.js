import prisma from "../db.js";

export const productService = {
    retrieveAllProducts() {
        return prisma.product.findMany({});
    },
    retrieveSpecificProduct(id) {
        return prisma.product.findUnique({ where: { id }});
    },
    retrieveAllProductsByUser(userId) {
        return prisma.product.findMany({
            where: {
                byUser: userId,
            }
        });
    },
    insertProduct(data) {
        return prisma.product.create({
            data,
        });
    },
    modifyProduct(id, data) {
        return prisma.product.update({
            where: {
                id,
            },
            data,
        });
    },
    removeProduct(id) {
        return prisma.product.delete({
            where: {
                id,
            }
        });
    },
};