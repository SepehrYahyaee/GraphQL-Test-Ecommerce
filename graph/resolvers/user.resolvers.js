import { GraphQLError } from "graphql";
import { hash, verify, createToken } from "../../providers/index.js";
import { userService } from "../../services/index.js";

export const userResolvers = {
    async getAllUsers(parent, args, context) {
        if (context?.role !== "ADMIN") throw new GraphQLError("Unauthorized");

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

        if (user) throw new GraphQLError("This user already exists!");

        const hashedPassword = await hash(args.password);

        return await userService.insertUser(args.userName, hashedPassword);
    },
    async login(parent, args, context) {
        const user = await userService.retrieveUserByUserName(args.userName);
        
        if (!user) throw new GraphQLError("Username or password is wrong!");

        const pwIsVerified = await verify(user.password, args.password);

        if (!pwIsVerified) throw new GraphQLError("Username or password is wrong!");

        return await createToken({ id: user.id }, process.env.SECRET_KEY, process.env.ACCESS_TOKEN_EXPIRE_TIME);
    },
    async updateUser(parent, args, context) {
        if (!context?.userId) throw new GraphQLError("Unauthorized");

        if (!(await userService.retrieveSpecificUser(args.id))) throw new GraphQLError("User not found");

        return await userService.modifyUser(context.userId, args.updateObject);
    },
    async deleteUser(parent, args, context) {
        if (!context.userId) throw new GraphQLError("Unauthorized");

        if (!(await userService.retrieveSpecificUser(args.id))) throw new GraphQLError("User not found");
        
        return await userService.removeUser(context.userId);
    },
}