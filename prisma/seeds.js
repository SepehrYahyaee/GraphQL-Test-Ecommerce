import dbConnection from "../db.js";
import { hash } from "../providers/index.js";
 
async function main() {
    // await dbConnection.user.deleteMany();
    // await dbConnection.product.deleteMany();
    // await dbConnection.comment.deleteMany();

    // await dbConnection.user.create({
    //     data: {
    //         userName: "Sepehr",
    //         password: await hash("123"),
    //         email: "7heycallmegray@gmail.com",
    //         role: "ADMIN"
    //     }
    // });

    // await dbConnection.user.create({
    //     data: {
    //         userName: "Hasan",
    //         password: await hash("123"),
    //         email: "hasan@gmail.com",
    //         role: "USER"
    //     }
    // });

    // await dbConnection.product.create({
    //     data: {
    //         name: "Product #1",
    //         amount: 10,
    //         price: 100000,
    //         byUser: "cm3bjgv4a00006958rgt9zxn9"
    //     }
    // });

    // await dbConnection.product.create({
    //     data: {
    //         name: "Product #2",
    //         amount: 30,
    //         price: 300000,
    //         byUser: "cm3bjgv4a00006958rgt9zxn9"
    //     }
    // });

    // await dbConnection.product.create({
    //     data: {
    //         name: "Product #3",
    //         amount: 5,
    //         price: 500000,
    //         byUser: "cm3bjgv4a00006958rgt9zxn9"
    //     }
    // });

    // await dbConnection.comment.create({
    //     data: {
    //         content: "Test Comment #1",
    //         byUser: "cm3bjgv5t00016958u2mj33oo",
    //         onProduct: 2
    //     }
    // });

    // await dbConnection.comment.create({
    //     data: {
    //         content: "Test Comment #2",
    //         byUser: "cm3bjgv5t00016958u2mj33oo",
    //         onProduct: 3,
    //         rate: "III"
    //     }
    // });
}

main();