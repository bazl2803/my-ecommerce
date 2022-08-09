import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../entities/user";
import { AppDataSource } from "../../data-source";
import Auth from "../../services/auth.service";
import { Token } from "../entities/token";

@Resolver((of) => User)
export class UserResolver {
  private readonly repository = AppDataSource.getRepository(User);

  @Query((returns) => User)
  async singup(
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("thumbnail") thumbnail: string
  ): Promise<
    User & {
      username: string;
      email: string;
      password: Promise<any>;
      thumbnail: string;
    }
  > {
    const hashedPwd = Auth.hashPassword(password);

    const user = Object.assign(new User(), {
      username,
      email,
      password: hashedPwd,
      thumbnail,
    });
    this.repository.create(user);
    return user;
  }

  @Query()
  async login(
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const user = await this.repository.findOne({
      where: { username, email, password },
    });
    if (!user) throw new Error("Invalid credentials");

    if (await Auth.matchPasswords(password, user.password)) {
      return Object.assign(new Token(), {
        value: await Auth.generateJwt({
          username: user.username,
          email: user.email,
          userId: user.id,
        }),
      });
    }
  }
}
