import prisma from "../db.js";

export const productService = {
    retrieveAllProducts() {
        return prisma.product.findMany({});
    },
    retrieveSpecificProduct(id) {
        return prisma.product.findUnique({ where: { id }});
    }
};