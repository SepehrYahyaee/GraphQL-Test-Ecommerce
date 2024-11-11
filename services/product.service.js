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
};