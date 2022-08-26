import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class File extends BaseEntity {
  @Field()
  @Column()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  url!: string;
}
