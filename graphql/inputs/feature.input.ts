import { Field, InputType } from "type-graphql";

@InputType()
export class FeatureInput {
  @Field()
  name!: string;

  @Field()
  value!: string;
}
