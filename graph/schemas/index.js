import { userSchema } from "./user.schema.js"; // User
import { productSchema } from "./product.schema.js"; // Product
import { commentSchema } from "./comment.schema.js"; // Comment

const typeDefs = `#graphql
${userSchema}
${productSchema}
${commentSchema}
type Query {
    users: [User]
    products: [Product]
    comments: [Comment]
    user(id: ID!): User
    product(id: ID!): Product
    comment(id: ID!): Comment
}
type AuthResult {
    accessToken: String!
}
type Mutation {
    register(userName: String!, password: String!): User!
    login(userName: String!, password: String!): AuthResult!
}
`;

export default typeDefs;