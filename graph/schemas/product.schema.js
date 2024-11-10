export const productSchema = `#graphql
    type Product {
        id: ID!
        name: String!
        category: String
        amount: Int!
        price: Float!
        description: String
        createdAt: String!
        updatedAt: String
    }
`;