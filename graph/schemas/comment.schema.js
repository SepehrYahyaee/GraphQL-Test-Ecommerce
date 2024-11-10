export const commentSchema = `#graphql
    enum CommentRating {
        I
        II
        III
        IV
        V
    }
    
    type Comment {
        id: ID!
        content: String!
        rate: CommentRating
        createdAt: String!
        updatedAt: String
    }
`;