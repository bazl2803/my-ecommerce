import { Field, Float, InputType } from "type-graphql";
import { FeatureInput } from "./feature.input";

@InputType()
export class ProductInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field((type) => Float)
  price!: number;

  @Field()
  thumbnail!: string;

  @Field((type) => [String])
  tags!: string[];

  @Field((type) => [FeatureInput])
  features?: FeatureInput[];

  @Field()
  categoryId!: string;
}
