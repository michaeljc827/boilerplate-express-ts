import { UserModel } from "../../models/user.model";
import { User } from "../../types/user.types";

const createUser = async (newUser: User) => {
  const user = await UserModel.query().insertAndFetch(newUser);

  return user;
};

export default createUser;
