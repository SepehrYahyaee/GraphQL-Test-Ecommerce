import { hash } from "../../providers/index.js";
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
    async register(parent, args, context) {
        const user = await userService.retrieveUserByUserName(args.userName);

        if (user) throw new Error("This user already exists!");

        const hashedPassword = await hash(args.password);

        return await userService.insertUser(args.userName, hashedPassword);
    },
}