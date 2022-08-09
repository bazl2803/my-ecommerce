import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { ObjectID } from "typeorm";
import { Product } from "../entities/product";
import { AppDataSource } from "../../data-source";
import { Category } from "../entities/category";

@Resolver(Product)
export class ProductResolver {
  constructor(private repository = AppDataSource.getRepository(Product)) { }

  /**
   * Return a single product
   * @param id 
   * @returns Product
   */
  @Query((returns) => Product)
  async product(@Arg("id") id: ObjectID): Promise<Product | null> {
    const product = await this.repository.findOneBy({ id: id });
    if (product === undefined) {
      throw new Error("Product not found");
    }
    return product;
  }

  /**
   * Return all products.
   * @param skip 
   * @param take 
   * @returns Product[]
   */
  @Query((returns) => [Product])
  async products(
    @Arg("skip") skip: number = 0,
    @Arg("take") take: number = 25
  ) {
    return this.repository.find({ skip, take });
  }

  /**
   * 
   * @param product 
   * @returns 
   */
  @FieldResolver((returns) => Category)
  async category(@Root() @Arg("product") product: Product) {
    return AppDataSource.getRepository(Category).findOneBy({ id: product.categoryId })
  }


}
