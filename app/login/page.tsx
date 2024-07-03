import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일과 비밀번호를 입력해 주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput required type="email" placeholder="Email" errors={[]} />
        <FormInput
          required
          type="password"
          placeholder="password"
          errors={[]}
        />
        <FormButton loading={false} text="계정 생성" />
      </form>
      <SocialLogin />
    </div>
  );
}
