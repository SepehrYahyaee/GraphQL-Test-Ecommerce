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
input UserUpdateInput {
    email: String,
    phone: String,
    age: Int

}
input CreateProductInput {
    name: String!,
    category: String,
    amount: Int!,
    price: Float!,
    description: String
}
input ProductUpdateInput {
    name: String,
    category: String,
    amount: Int,
    price: Float,
    description: String
}
enum CommentRating {
    I
    II
    III
    IV
    V
}
input CreateCommentInput {
    content: String!,
    rate: CommentRating,
    onProduct: Int!,
}
input UpdateCommentInput {
    content: String,
    rate: CommentRating,
}
type Mutation {
    register(userName: String!, password: String!): User!
    login(userName: String!, password: String!): AuthResult!
    updateUser(updateObject: UserUpdateInput!): User!
    deleteAccount: User!
    createProduct(createProductObject: CreateProductInput!): Product!
    updateProduct(id: ID!, updateObject: ProductUpdateInput!): Product!
    deleteProduct(id: ID!): Product!
    createComment(createCommentObject: CreateCommentInput!): Comment!
    updateComment(id: ID!, updateObject: UpdateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
}
`;

export default typeDefs;