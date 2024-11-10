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
}
`;

export default typeDefs;