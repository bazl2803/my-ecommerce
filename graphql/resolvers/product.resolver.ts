import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../entities/product";
import { AppDataSource } from "../../data-source";
import { ProductInput } from "../inputs/product.input";

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private repository = AppDataSource.getRepository(Product)) {}

  /**
   * Return a single product
   * @param id
   * @returns Product
   */
  @Query((returns) => Product)
  async product(@Arg("id") id: string): Promise<Product | null> {
    const product = await this.repository.findOneBy({ _id: id });
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
  ): Promise<Product[]> {
    return await this.repository.find({ skip, take });
  }

  /**
   * Create a product
   * @param product
   */
  @Mutation(() => Product)
  async createProduct(@Arg("Product") product: ProductInput): Promise<void> {
    const newProduct = Product.create(product);
    await newProduct.save().then(() => {
      return newProduct;
    });
  }

  /**
   * Removes a product
   * @param id
   * @returns
   */
  @Mutation(() => Product)
  async removeProduct(@Arg("id") id: string) {
    return await this.repository.delete(id);
  }

  /**
   * Update a product
   * @param id
   * @param product
   */
  @Mutation(() => Product)
  async updateProduct(id: string, product: ProductInput) {
    return await this.repository.update({ _id: id }, product);
  }
}
