export async function getProducts() {
  const response = await fetch("http://localhost:8000/api/products");
  const data = await response.json();
  return data;
}

export async function getAllProducts(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

// single product
export async function getSingleProduct(id: string) {
  const response = await fetch(`http://localhost:8000/api/products/${id}`);
  const data = await response.json();
  return data;
}

// fetch all products with details
export async function fetchAllProducts(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

// save new product
export async function storeProduct(prevState: unknown, formData: FormData) {
  const data = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    body: formData,
  });
  // if data inserted show next step
  if (data.status === 200) {
    console.log("Data inserted successfully");
    return {
      data: "data inserted successfully",
      status: true,
    };
  } else {
    console.log("Something went wrong");
    return {
      data: "something went wrong",
      status: false,
    };
  }
}
