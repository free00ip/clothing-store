import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SHOP.CO
        </Link>

        <nav className={styles.nav}>
          <div className={styles.shopLink}>
            <Link href="/shop">Shop</Link>
            <img
              src="/icons/chevron-down.svg"
              alt=""
              className={styles.chevron}
            />
          </div>

          <Link href="/shop">On Sale</Link>
          <Link href="/shop">New Arrivals</Link>
          <Link href="/shop">Brands</Link>
        </nav>

        <div className={styles.search}>
          <img src="/icons/search.svg" alt="" className={styles.actionIcon} />

          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search for products"
          />
        </div>

        <div className={styles.actions}>
          <Link href="/cart" aria-label="Cart">
            <img src="icons/cart.svg" alt="" className={styles.actionIcon} />
          </Link>
          <Link href="/account" aria-label="Account">
            <img src="icons/user.svg" alt="" className={styles.actionIcon} />
          </Link>
        </div>
      </div>
    </header>
  );
}
