"use client";
import { useState } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";
import { reviews } from "../../data/reviews";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }; */

  const visibleReviews = Array.from({ length: 3 }, (_, index) => {
    return reviews[(currentIndex + index) % reviews.length];
  });

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>OUR HAPPY CUSTOMERS</h2>

        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrowButton}
            arial-label="Previous reviews"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            arial-label="Next reviews"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.reviews}>
        {visibleReviews.map((review) => (
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
