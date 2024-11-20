import { jwtVerify, SignJWT } from "jose";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const jwt = process.env.JWT;
const key = new TextEncoder().encode(jwt);
export const signJWT = async (payload: unknown, exp?: string) => {
  if (!exp)
    return await new SignJWT({ payload })
      .setProtectedHeader({ alg: "HS256" })
      .sign(key);
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(exp)
    .sign(key);
};

export const verifyJWT = async (token: string) => {
  try {
    const {
      payload: { payload },
    } = await jwtVerify(token, key, { algorithms: ["HS256"] });

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const verfiyUserToken = async (token: string) => {
  const verifiedToken = await verifyJWT(token);
  const tokenSchema = z.object({
    id: z.string(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  });

  const parsed = tokenSchema.safeParse(verifiedToken);
  if (!parsed.success) {
    return console.log(parsed.error.flatten().fieldErrors);
  }
  return parsed.data;
};

export const getUserFromCookie = async () => {
  const session = "aa";
  console.log(session);
  const user = "aaa";
  console.log(user);

  if (!session || !user) return null;
  const verfied = await verifyJWT(session);
  console.log(verfied);

  if (!verfied) return null;
  const userToken = await verfiyUserToken(user);
  return userToken;
};

export const decryptCookieValue = async (cookie: string | undefined) => {
  if (!cookie) return null;
  const decrypted = await verifyJWT(cookie);
  return decrypted;
};
