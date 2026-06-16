"use server";
export default async function login(prevState: unknown, formData: FormData) {
  console.log(formData);
  const data = await fetch("http://localhost:8000/api/auth", {
    body: formData,
    headers: {
      accept: "application/json",
    },
    method: "POST",
  });
  const response = await data.json();
  console.log(response);
  return response;
}

export async function getUser(token: string) {
  const data = await fetch(`http://localhost:8000/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });
  const response = await data.json();
  console.log(response);
  return response;
}

export async function signUp(prevState: unknown, formData: FormData) {
  console.log(formData);
  try {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      return {
        message: "Passwords does not matched",
        success: false,
      };
    } else {
      const data = await fetch(`http://localhost:8000/api/signup`, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      });
      const response = await data.json();
      console.log(response);
      return {
        message: response,
        success: true,
      };
    }
  } catch (err) {
    return {
      message: "Unable to sign up user",
      success: false,
    };
  }
}
