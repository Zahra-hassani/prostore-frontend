export async function getAllUsers(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function deleteUser(prevState: unknown, formData: FormData) {
  try {
    const data = await fetch(
      `http://localhost:8000/api/dashboard/delete-user/${formData.get("id")}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      },
    );
    const response = await data.json();
    return {
      message: "User deleted successfully",
    };
  } catch (err) {
    return {
      message: "Something went wrong",
    };
  }
}
