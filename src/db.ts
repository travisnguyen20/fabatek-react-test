import { User } from "./types";

export const saveUser = (data: User): boolean => {
  if (data.email && data.name && data.passwordEncrypted && data.id) {
    return true;
  } else {
    return false;
  }
};
