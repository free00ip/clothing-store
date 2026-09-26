import styles from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>STAY UPTO DATE ABOUR OUR LATEST OFFERS</h2>

      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <img src="/icons/email.svg" alt="" className={styles.emailIcon} />

          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
        </div>

        <button type="submit" className={styles.button}>
          Subscribe to Newsletter
        </button>
      </form>
    </section>
  );
}
