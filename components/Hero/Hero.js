import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

          <p className={styles.description}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link href="/shop" className={styles.shopButton}>
            Shop Now
          </Link>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>200+</strong>
              <span>International Brands</span>
            </div>

            <div className={styles.statItem}>
              <strong>2,000+</strong>
              <span>High-Quality Products</span>
            </div>

            <div className={styles.statItem}>
              <strong>30,000+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
