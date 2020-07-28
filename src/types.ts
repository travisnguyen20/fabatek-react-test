export type CreateUserInput = {
  name: string;
  email: string;
  /** Clear text password */
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  passwordEncrypted: string;
};
