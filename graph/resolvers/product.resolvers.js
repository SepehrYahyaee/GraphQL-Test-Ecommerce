import { productService } from "../../services/index.js";

export const productResolvers = {
    async getAllProducts() {
        return await productService.retrieveAllProducts();
    },
    async getSpecificProduct(parent, args, context) {
        return await productService.retrieveSpecificProduct(+args.id);
    },
    async getAllProductsByUser(parent, args, context) {
        return await productService.retrieveAllProductsByUser(parent.id);
    },
    async getSpecificProductByComment(parent, args, context) {
        return await productService.retrieveSpecificProduct(+parent.onProduct);
    }
}