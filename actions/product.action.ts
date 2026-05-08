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
