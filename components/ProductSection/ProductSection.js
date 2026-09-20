import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductSection.module.css";

export default function ProductSection({ title, products, showDivider }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.products}>
        {products.map((product) => (
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

      {showDivider && <div className={styles.divider}></div>}
    </section>
  );
}
