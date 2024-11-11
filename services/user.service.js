import prisma from "../db.js";

export const userService = {
    retrieveAllUsers() {
        return prisma.user.findMany({});
    },
    retrieveSpecificUser(id) {
        return prisma.user.findUnique({ where: { id } })
    },
};