import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  readonly id!: ObjectID;

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

  @Field()
  @Column()
  photos!: string[];

  @Field()
  @Column()
  tags!: string[];

  @Field()
  @Column()
  availability!: boolean;
}
