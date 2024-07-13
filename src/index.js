const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');
const typeDefs=require('./schema');
const resolvers=require('./resolvers')
const userApiFromRouter = require('./routes/userRoutes')//import
const app = express();
const port = 3001
const url= 'mongodb+srv://prasunachandrika156:9LryQernxuYOB8Dd@cluster0.lt45cda.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('./users',userApiFromRouter);
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code 
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
beforeAll(async()=>{
    await StartServer();
})
//test my graphql server
//well run our test cases before server starts
test('GraphQL server started and running',async()=>{
    const res = await request(app)
    .post('/graphql').send({
        query:`
        query{
            _schema{
                queryType{
                    name
                }
            }

        }`
    });
    expect(res.statusCode).toBe(200)
    expect(res.body.data._schema.queryType.name).toBe('Query');
})