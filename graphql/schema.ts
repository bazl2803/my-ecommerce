import { buildSchema } from "type-graphql";

export const schema = await buildSchema({
  resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
});
