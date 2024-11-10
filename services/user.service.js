import prisma from "../db.js";

export const userService = {
    retrieveAllUsers() {
        return prisma.user.findMany({});
    },
};