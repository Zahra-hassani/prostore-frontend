import { getProducts } from "@/actions/product.action";
import Hero from "@/components/Hero";
import ProductsList from "@/components/Share/Products/Products-list";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Hero />
      <ProductsList limit={4} products={products} title="Newest Arrivals" />
    </div>
  );
}
