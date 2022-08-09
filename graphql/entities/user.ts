import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  readonly id!: ObjectID;

  @Field()
  @Column()
  thumbnail!: string;

  @Field(() => String, { nullable: true })
  @Column()
  username: string | undefined;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;
}
