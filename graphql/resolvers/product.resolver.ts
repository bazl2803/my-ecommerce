import { Arg, Query, Resolver } from "type-graphql";
import { ObjectID } from "typeorm";
import { Product } from "../entities/product";
import { AppDataSource } from "../../data-source";

@Resolver(Product)
export class ProductResolver {
  constructor(private repository = AppDataSource.getRepository(Product)) {}

  @Query((returns) => Product)
  async product(@Arg("id") id: ObjectID) {
    const product = await this.repository.findOneBy({ id: id });
    if (product === undefined) {
      throw new Error("Product not found");
    }
    return product;
  }

  @Query((returns) => [Product])
  async products(
    @Arg("skip") skip: number = 0,
    @Arg("take") take: number = 25
  ) {
    return this.repository.find({ skip, take });
  }
}
