import { productService } from "../../services/index.js";

export const productResolvers = {
    async products() {
        return await productService.retrieveAllProducts();
    }
}