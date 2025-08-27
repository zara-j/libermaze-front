export type LoginPayloadModel = {
  username: string;
  password: string;
};

export type TokenResponse = {
  access: string;
  refresh: string;
};

export type UserResponse = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};