import styles from "./PromoBar.module.css";

export default function PromoBar() {
    return (
        <div className={styles.promoBar}>
            <p className={styles.text}>
                <span>Sign up and get 20% off to your first order.</span>
                <a href="#">Sign Up Now</a>
            </p>

            <button className={styles.closeButton} type="button">×</button>
        </div>
    );
}