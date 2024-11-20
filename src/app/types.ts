import { Dispatch, SetStateAction } from "react";

export type TUser = {
  username: string;
  passwordHash: string;
  goals: Goal[];
};
export type Goal = {
  name: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
};

export type TTestomonial = {
  userName: string;
  rating: number;
  reviewText: string;
};
export type TContext = {
  user: TUser | undefined;
  setUser: Dispatch<SetStateAction<TUser | undefined>>;
};

export type TUserLogin = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export type TRegisterUser = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};
