import prisma from "../db.js";

export const productService = {
    retrieveAllProducts() {
        return prisma.product.findMany({});
    },
};