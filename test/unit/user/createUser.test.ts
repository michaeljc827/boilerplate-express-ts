import createUser from "../../../src/services/user/createUser";
import { userFactory } from "../../util/factory/user.factory";

test("Test creating a user", async () => {
  const generatedUser = userFactory.build();

  const user = await createUser(generatedUser);

  expect(user).toMatchObject(generatedUser);
});
