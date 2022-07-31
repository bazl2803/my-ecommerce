import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  readonly id!: ObjectID;

  @Field()
  @Column()
  thumbnail!: string;

  @Field()
  @Column()
  name!: string;
}
