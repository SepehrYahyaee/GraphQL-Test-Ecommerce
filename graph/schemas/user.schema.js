export const userSchema = `#graphql
    enum Role {
        USER
        ADMIN
        SUPERADMIN
    }

    type User {
        id: ID!
        userName: String!
        password: String!
        email: String
        phone: String
        age: Int
        role: Role!
        createdAt: String!
        updatedAt: String
        comments: [Comment!]
        products: [Product!]
    }
`;