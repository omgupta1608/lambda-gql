const { ApolloServer, gql } = require("apollo-server-lambda");
let server;
start = async () => {
    const typeDefs = await require('./schema')();
    const resolvers = require('./resolvers');

    server = new ApolloServer({
        typeDefs,
        resolvers
    });
}

start().then(() => {
    exports.handler = server.createHandler();
})
