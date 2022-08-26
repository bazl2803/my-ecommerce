import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../../../graphql/resolvers/user.resolver";
import { ProductResolver } from "../../../graphql/resolvers/product.resolver";
import { CategoryResolver } from "../../../graphql/resolvers/category.resolver";
import { NextApiRequest, NextApiResponse } from "next";

const schema = await buildSchema({
  resolvers: [UserResolver, ProductResolver, CategoryResolver],
  emitSchemaFile: true
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await server.createHandler({ path: "/api/v1/graphql" })(req, res);
}
