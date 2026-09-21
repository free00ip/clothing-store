import ReviewCard from "../ReviewCard/ReviewCard";
import { reviews } from "../../data/reviews";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>OUR HAPPY CUSTOMERS</h2>

        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrowButton}
            arial-label="Previous reviews"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            arial-label="Next reviews"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.reviews}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            text={review.text}
            verified={review.verified}
          />
        ))}
      </div>
    </section>
  );
}
