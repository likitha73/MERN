const express = require ('express')
const router = express.Router()
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const {ApolloServer,gql} = require('apollo-server-express');
//:3001/users/register
const server = new ApolloServer({typeDefs,resolvers});
router.post('/register',async (req,res)=>{
    query:gql`query{
    mutation{ createUser(input:{name:"${name}",
    email:})}}`
})