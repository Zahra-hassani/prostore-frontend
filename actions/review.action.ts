"use server";
export async function getReviews() {
  const data = await fetch("http://localhost:8000/api/reviews");
  const response = await data.json();
  return response;
}
