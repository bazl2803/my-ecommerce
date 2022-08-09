import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Feature {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
}
