import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "./product";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  readonly _id!: string;

  @Field()
  @Column()
  thumbnail!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Product])
  async products(@Root() parent: Category) {
    return await AppDataSource.getRepository(Product).findBy({
      categoryId: parent._id,
    });
  }
}
