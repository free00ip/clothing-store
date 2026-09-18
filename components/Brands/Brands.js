import styles from "./Brands.module.css";

export default function Brands() {
  return (
    <section className={styles.brands}>
      <div className={styles.container}>
        <img src="/brands/versace.svg" alt="Versace" />
        <img src="/brands/zara.svg" alt="Zara" />
        <img src="/brands/gucci.svg" alt="Gucci" />
        <img src="/brands/prada.svg" alt="Prada" />
        <img src="/brands/calvin-klein.svg" alt="Calvin Klein" />
      </div>
    </section>
  );
}
