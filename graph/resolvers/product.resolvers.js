import { GraphQLError } from "graphql";
import { productService } from "../../services/index.js";

export const productResolvers = {
    async getAllProducts() {
        return await productService.retrieveAllProducts();
    },
    async getSpecificProduct(parent, args, context) {
        return await productService.retrieveSpecificProduct(+args.id);
    },
    async getAllProductsByUser(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        return await productService.retrieveAllProductsByUser(parent.id);
    },
    async getSpecificProductByComment(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        return await productService.retrieveSpecificProduct(+parent.onProduct);
    },
    async createProduct(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        return await productService.insertProduct({ ...args.createProductObject, byUser: context.userId });
    },
    async updateProduct(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        if (!(await productService.retrieveSpecificProduct(+args.id))) throw new GraphQLError("Product not found");

        return await productService.modifyProduct(+args.id, args.updateObject);
    },
    async deleteProduct(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

        if (!(await productService.retrieveSpecificProduct(+args.id))) throw new GraphQLError("Product not found");

        return await productService.removeProduct(+args.id);
    },
}