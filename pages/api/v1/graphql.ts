import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../../graphql/schema";

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
});

module.exports = apolloServer.start().then(() => {
  return apolloServer.createHandler({ path: "/api/v1/graphql" });
});
