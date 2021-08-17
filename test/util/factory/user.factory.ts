import * as Factory from "factory.ts";
import { User } from "../../../src/types/user.types";

import faker from "faker";

export const userFactory = Factory.Sync.makeFactory<User>({
  id: Factory.each((i) => i),
  username: faker.internet.userName(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role_id: faker.datatype.number(),
  privilege_id: faker.datatype.number(),
  profile_url: faker.image.imageUrl(),
});
