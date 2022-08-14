import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { AppDataSource } from "../../data-source";
import { Category } from "../entities/category";
import { Product } from "../entities/product";

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private repository = AppDataSource.getRepository(Category)) { }

  /**
   * Return a single category.
   * @param id 
   * @returns Category
   */

  @Query((returns) => Category)
  async category(@Arg("id") id: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ _id: id });
    if (category === undefined) {
      throw new Error("Product not found");
    }
    return category;
  }


  /**
   * Return all categories.
   * @returns Category[]
   */
  @Query((returns) => [Category])
  async categories(): Promise<Category[]> {
    return await this.repository.find();
  }
}
