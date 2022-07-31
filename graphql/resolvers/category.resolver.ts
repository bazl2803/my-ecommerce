import { Arg, Query, Resolver } from "type-graphql";
import { ObjectID } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../entities/category";

@Resolver((of) => Category)
class CategoryResolver {
  constructor(private repository = AppDataSource.getRepository(Category)) {}

  @Query((returns) => Category)
  async category(@Arg("id") id: ObjectID) {
    const category = await this.repository.findOneBy({ id: id });
    if (category === undefined) {
      throw new Error("Product not found");
    }
    return category;
  }

  @Query((returns) => Category)
  async categories() {
    return await this.repository.find();
  }
}
