import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function SMSLogIn() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">전화번호를 인증하세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          required
          type="number"
          placeholder="Phone number"
          errors={[]}
        />
        <FormInput
          required
          type="number"
          placeholder="인증 코드 입력"
          errors={[]}
        />
        <FormButton loading={false} text="인증하기" />
      </form>
    </div>
  );
}
