import { createWriteStream } from "fs";
import { type FileUpload, GraphQLUpload } from "graphql-upload";
import { Arg, Mutation, Resolver } from "type-graphql";
import { File } from "../entities/file";

@Resolver()
export class FileResolver {
  @Mutation(() => Boolean)
  async singleUpload(
    @Arg("file", () => GraphQLUpload) file: FileUpload
  ): Promise<boolean> {
    const { filename, createReadStream } = file;
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `/../../uploads/${filename}`))
        .on("finish", () => resolve(true))
        .on("close", () => resolve(true))
        .on("error", () => reject(false))
    );
  }
}
