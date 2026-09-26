import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.band}>
            <Link href="/" className={styles.logo}>
              SHOP.CO
            </Link>

            <p className={styles.description}>
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Twitter">
                <img src="/icons/social/twitter.svg" />
              </a>

              <a href="#" aria-label="Facebook">
                <img src="/icons/social/facebook.svg" />
              </a>

              <a href="#" aria-label="Instagram">
                <img src="/icons/social/instagram.svg" />
              </a>

              <a href="#" aria-label="GitHub">
                <img src="/icons/social/github.svg" />
              </a>
            </div>
          </div>

          <nav className={styles.column}>
            <h3>COMPANY</h3>
            <Link href="#">About</Link>
            <Link href="#">Features</Link>
            <Link href="#">Works</Link>
            <Link href="#">Career</Link>
          </nav>

          <nav className={styles.column}>
            <h3>HELP</h3>
            <Link href="#">Customer Support</Link>
            <Link href="#">Delivery Details</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </nav>

          <nav className={styles.column}>
            <h3>FAQ</h3>
            <Link href="#">Account</Link>
            <Link href="#">Manage Deliveries</Link>
            <Link href="#">Orders</Link>
            <Link href="#">Payments</Link>
          </nav>

          <nav className={styles.column}>
            <h3>RESOURCES</h3>
            <Link href="#">Free eBooks</Link>
            <Link href="#">Development Tutorial</Link>
            <Link href="#">How to - Blog</Link>
            <Link href="#">Youtube Playlist</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className={styles.payments}>
            <img src="/images/payments/visa.svg" alt="Visa" />
            <img src="/images/payments/mastercard.svg" alt="MasterCard" />
            <img src="/images/payments/paypal.svg" alt="PayPal" />
            <img src="/images/payments/apple-pay.svg" alt="ApplePay" />
            <img src="/images/payments/google-pay.svg" alt="GooglePay" />
          </div>
        </div>
      </div>
    </footer>
  );
}
