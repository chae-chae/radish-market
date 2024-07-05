"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">가입을 위해 빈칸을 채워주세요.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          required
          type="text"
          placeholder="Username"
        />
        <FormInput name="email" required type="email" placeholder="Email" />
        <FormInput
          name="password"
          required
          type="password"
          placeholder="password"
        />
        <FormInput
          name="confirm_password"
          required
          type="password"
          placeholder="Confirm password"
        />
        <FormButton text="계정 생성" />
      </form>
      <SocialLogin />
    </div>
  );
}
