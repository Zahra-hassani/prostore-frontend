import { getProducts } from "@/actions/product.action";
import AllProductsList from "@/components/Share/Products/all-product-list";
import { productInfo } from "@/types/product";

async function page() {
  const data = await getProducts();
  return (
    <div>
      <AllProductsList />
    </div>
  );
}

export default page;
