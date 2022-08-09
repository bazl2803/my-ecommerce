import { Arg, Query, Resolver, Root } from "type-graphql";
import { ObjectID } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../entities/category";
import { Product } from "../entities/product";

@Resolver((of) => Category)
class CategoryResolver {
  constructor(private repository = AppDataSource.getRepository(Category)) { }

  /**
   * Return a single category.
   * @param id 
   * @returns Category
   */

  @Query((returns) => Category)
  async category(@Arg("id") id: ObjectID): Promise<Category | null> {
    const category = await this.repository.findOneBy({ id: id });
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

  /**
   * Return products with the same category
   * @param category
   * @returns Product[]
   */
  @Query(returns => [Product])
  async products(@Root() @Arg("category") category: Category): Promise<Product[]> {
    return AppDataSource.getRepository(Product).findBy({
      categoryId: category.id
    })
  }
}
