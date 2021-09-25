const { apolloServer } = require("apollo-server");

const typeDef = `
  type Query {
    info: String!
  }
`

const resolvers = {
    Query = {
        info: ()=> `This is the API of a Hackernews Clone`
    }
};

const server = new ApolloServer({
  typeDef,
  resolvers,
});

server.listen().then((url) => {
  console.log(`server is running on ${url}`);
});
