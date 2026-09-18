import ProductCard from "../ProductCard/ProductCard";
import { newArrivals } from "../../data/product";
import styles from "./NewArrivals.module.css";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>NEW ARRIVALS</h2>

      <div className={styles.products}>
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Link href="/shop" className={styles.viewAllButton}>
          View All
        </Link>
      </div>

      <div className={styles.divider}></div>
    </section>
  );
}
