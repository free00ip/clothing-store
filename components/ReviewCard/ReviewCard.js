import styles from "./ReviewCard.module.css";

export default function ReviewCard({ name, rating, text, verified }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, index) => (
          <img
            key={index}
            src="/icons/star.svg"
            alt=""
            className={styles.star}
          />
        ))}
      </div>

      <div className={styles.customer}>
        <h3 className={styles.name}>{name}</h3>
        {verified && <span className={styles.verified}></span>}
      </div>

      <p className={styles.text}>{text}</p>
    </article>
  );
}
