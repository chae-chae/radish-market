"use server";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(prevState);
  console.log("logged in");
  if (formData.get("password") === "12345") {
    return {
      errors: [],
      success: true,
    };
  } else {
    return {
      errors: ["wrong password"],
    };
  }
}
