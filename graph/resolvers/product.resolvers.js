import { productService } from "../../services/index.js";

export const productResolvers = {
    async getAllProducts() {
        return await productService.retrieveAllProducts();
    },
    async getSpecificProduct(parent, args, context) {
        return await productService.retrieveSpecificProduct(+args.id);
    }
}