import prisma from "../db.js";

export const userService = {
    retrieveAllUsers() {
        return prisma.user.findMany({});
    },
    retrieveSpecificUser(id) {
        return prisma.user.findUnique({ where: { id } });
    },
    retrieveUserByUserName(userName) {
        return prisma.user.findUnique({ where: { userName }});
    },
    insertUser(userName, password) {
        return prisma.user.create({
            data: {
                userName, password,
            }
        });
    },
};