import { userService } from "../../services/index.js";

export const userResolvers = {
    async users() {
        return await userService.retrieveAllUsers();
    }
}