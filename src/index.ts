import * as uuid from "uuid-v4";
import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }
`;

const resolvers = {
  Query: {
    me() {
      return {
        id: uuid(),
        name: "Joe Rogan",
        email: "joe.rogan@gmail.com"
      };
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("Server running at port 4000");
});
