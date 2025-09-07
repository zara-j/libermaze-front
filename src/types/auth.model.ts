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

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  re_password: string;
  first_name?: string;
  last_name?: string;
};

export type RegisterResponse = {
  id: number;
  email: string;
  username: string;
};

export type AuthMode = "login" | "register";

