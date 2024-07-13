// schema.js
// create a schema using GQL
const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    id: ID!
    name: String!
    email: String!
}
type Query {
    getUser(id: ID!): User 
    getUsers: [User]
    searchUsers(name: String!): [User]
}
input createUserInput {
    name: String!
    email: String!
    password: String!
}
input updateUserInput {
    name: String!
    email: String!
    password: String!
}
type Mutation {
    createUser(input: createUserInput!): User
    updateUser(id: ID!, input: updateUserInput!): User
    deleteUser(id: ID!): User
    changePass(id: ID!, password: String!): User
}
`;
module.exports = typeDefs; // export out