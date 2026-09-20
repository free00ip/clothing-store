import Brands from "@/components/Brands/Brands";
import Hero from "../components/Hero/Hero";
import ProductSection from "../components/ProductSection/ProductSection";
import { newArrivals, topSelling } from "../data/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />

      <ProductSection
        title="NEW ARRIVALS"
        products={newArrivals}
        showDivider
        /* showDivider={true} */
      />

      <ProductSection
        title="TOP SELLING"
        products={topSelling}
        /* showDivider={false */
      />
    </main>
  );
}
