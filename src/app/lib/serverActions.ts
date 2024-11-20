"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import prisma from "./db";
import { signJWT } from "./utils";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";

export async function registerUser(previousState: unknown, formData: FormData) {
  const cookie = cookies();

  const newUserSchema = z
    .object({
      firstName: z
        .string()
        .min(2, { message: "Your Name must have at least 2 characters" }),
      lastName: z
        .string()
        .min(4, { message: "Your Last Name Must have at least 3 characters" }),
      email: z.string().email({ message: "You must put in a valid email" }),
      username: z
        .string()
        .min(6, { message: "Your Username must be at least 6 characters long" })
        .max(15, { message: "Your username can be 15 characters max" }),
      password: z
        .string()
        .regex(/^(?=.{8,20})/, { message: "Must be 8-20 characters long" })
        .regex(/^(?=.*[A-Z])/, {
          message: "Must contain at least 1 uppercase letter",
        })
        .regex(/^(?=.*[a-z])/, {
          message: "Must contain at least 1 lowercase letter",
        })
        .regex(/^(?=.*[0-9])/, { message: "Must contain at least 1 number" })
        .regex(/^(?=.*[@#$%^&+=])/, {
          message: `Must contain one of these special characters '@ # $ % ^ & + ='`,
        }),
      confirmPassword: z.string(),
    })
    .refine((newUser) => newUser.password === newUser.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });
  const data = Object.fromEntries(formData);
  const parsed = newUserSchema.safeParse(data);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    console.log(errors);
    return { errors };
  }
  const {
    data: { email, firstName, lastName, username },
  } = parsed;
  const password = await bcrypt.hash(parsed.data.password, 12);

  try {
    const { id } = await prisma.user.create({
      data: { email, firstName, lastName, password, username },
    });
    const token = await signJWT({ id, username, firstName, lastName });
    cookie.set({ name: "user", value: token, httpOnly: true, secure: true });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
      return { errors: { username: ["Username already taken"] } };
    }
    return { error: { general: ["Something went wrong"] } };
  }

  console.log(previousState);
  console.log(data);
  console.log(parsed);
}

export async function loginUser(previousState: unknown, formData: FormData) {
  const cookie = cookies();
  const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
    rememberMe: z.string().optional(),
  });
  console.log(formData);

  const data = Object.fromEntries(formData);
  const parsed = loginSchema.safeParse(data);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    console.log(errors);
    return { errors, formData };
  }
  const { username, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return { errors: { username: ["User not found"] } };
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return { errors: { password: ["Incorrect Password"] } };
  }
  const token = await signJWT({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  cookie.set({ name: "user", value: token, httpOnly: true, secure: true });
  const { rememberMe } = parsed.data;
  const today = new Date();
  const tmrw = new Date(today.getDate() + 1);
  if (!rememberMe) {
    const value = await signJWT({ id: user.id }, "1d");
    cookie.set({
      name: "Session",
      value,
      httpOnly: true,
      secure: true,
      expires: tmrw,
    });
  }
  const value = await signJWT({ id: user.id });
  cookie.set({
    name: "Session",
    value,
    httpOnly: true,
    secure: true,
  });
  redirect("/dashboard");
}

export async function logoutUser() {
  const cookie = cookies();
  cookie.delete({ name: "Session" });
  cookie.delete({ name: "user" });
}
export const getCookie = (name: string) => {
  const cookie = cookies();
  return cookie.get(name)?.value;
};
