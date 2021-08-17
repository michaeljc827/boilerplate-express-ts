import { Model } from "objection";
import { User } from "../types/user.types";

export class UserModel extends Model {
  static get tableName() {
    return "user";
  }
}
export interface UserModel extends User, Model {}
