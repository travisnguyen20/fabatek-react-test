export const encode = (input: string) => {
  return btoa(input);
};

export const decode = (encodedValue: string) => {
  return atob(encodedValue);
};
