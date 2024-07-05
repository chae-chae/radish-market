"use server";

import { z } from "zod";

const PW_REGEX = new RegExp(/^(?=.*\d).+$/);

const EMAIL_REGEX = new RegExp(/@zod\.com/gm);

const formSchema = z.object({
  email: z.string().email().regex(EMAIL_REGEX, "must be @zod.com"),
  username: z.string().min(5),
  password: z
    .string({ required_error: "Password is a required" })
    .min(10, "must more than 10")
    .regex(PW_REGEX, "must contain a number"),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result);
    return result.error.flatten();
  } else {
    console.log(result);
  }
}
