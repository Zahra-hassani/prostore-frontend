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

// update customer's info
export async function updateUser(prevState: unknown, formData: FormData) {
  try {
    const data = await fetch(
      `http://localhost:8000/api/dashboard/update-user/${formData.get("id")}`,
      {
        method: "PUT",
      },
    );
    const response = await data.json();
    return {
      message: "user updated successfully",
      success: true,
    };
  } catch (err) {
    return {
      message: "Something went wrong",
      success: false,
    };
  }
}
