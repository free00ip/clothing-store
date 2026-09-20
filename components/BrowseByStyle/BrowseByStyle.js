import styles from "./BrowseByStyle.module.css";

export default function BrowseByStyle() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>BROWSE BY STYLE</h2>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.casual}`}>
          <h3>Casual</h3>
        </div>

        <div className={`${styles.card} ${styles.formal}`}>
          <h3>Fromal</h3>
        </div>

        <div className={`${styles.card} ${styles.party}`}>
          <h3>Party</h3>
        </div>

        <div className={`${styles.card} ${styles.gym}`}>
          <h3>Gym</h3>
        </div>
      </div>
    </section>
  );
}
