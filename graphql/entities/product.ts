import { Field, ID, InputType, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "./category";
import { Feature } from "./feature";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  readonly _id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  brand!: string;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  stock!: number;

  @Field()
  @Column()
  rating!: number;

  @Field()
  @Column()
  thumbnail!: string;

  @Field((type) => [String])
  @Column()
  photos!: string[];

  @Field((type) => [String])
  @Column()
  tags!: string[];

  @Field()
  @Column()
  availability!: boolean;

  @Field()
  @Column()
  categoryId!: string;

  @Field((type) => [Feature])
  @Column((type) => Feature)
  features?: Feature[];

  @Field((type) => Category)
  async category(@Root() parent: Product) {
    return await AppDataSource.getRepository("category").findBy({
      _id: parent.categoryId,
    });
  }
}
