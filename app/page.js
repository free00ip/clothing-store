import Brands from "@/components/Brands/Brands";
import Hero from "../components/Hero/Hero";
import NewArrivals from "../components/NewArrivals/NewArrivals";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <NewArrivals />
    </main>
  );
}
