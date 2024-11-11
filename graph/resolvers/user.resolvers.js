import { userService } from "../../services/index.js";

export const userResolvers = {
    async getAllUsers() {
        return await userService.retrieveAllUsers();
    },
    async getSpecificUser(parent, args, context) {
        return await userService.retrieveSpecificUser(args.id);
    },
    async getSpecificUserFromProduct(parent, args, context) {
        return await userService.retrieveSpecificUser(parent.byUser);
    },
    async getSpecificUserFromComment(parent, args, context) {
        return await userService.retrieveSpecificUser(parent.byUser);
    },
}