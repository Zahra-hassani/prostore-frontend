"use server";
export async function getReviews() {
  const data = await fetch("http://localhost:8000/api/reviews");
  const response = await data.json();
  return response;
}

export async function addComment(previousState: unknown, formData: FormData) {
  try {
    const data = await fetch(`http://localhost:8000/api/reviews`, {
      headers: {
        accept: "application/json",
      },
      method: "POST",
      body: formData,
    });
    const response = await data.json();
    return {
      message: response,
      success: true,
    };
  } catch (err) {
    return {
      message: "Something went wrong",
      success: false,
    };
  }
}
