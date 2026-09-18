import styles from "./ProductCard.module.css";

export default function ProductCard({
  name,
  price,
  oldPrice,
  discount,
  image,
  rating,
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      <h3 className={styles.name}>{name}</h3>

      <div className={styles.rating}>
        <div className={styles.stars}>
          {Array.from({ length: fullStars }).map((_, index) => (
            <img
              key={index}
              src="/icons/star.svg"
              alt=""
              className={styles.star}
            />
          ))}

          {hasHalfStar && (
            <img src="/icons/star-half.svg" alt="" className={styles.star} />
          )}
        </div>

        <span className={styles.ratingValue}>{rating}/5</span>
      </div>

      <div className={styles.priceRow}>
        <span className={styles.price}>${price}</span>
        {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}

        {discount && <span className={styles.discount}>-{discount}%</span>}
      </div>
    </article>
  );
}

/*
export default function ProductCard(props) {
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <span>{props.rating}/5</span>
      <p>${props.price}</p>
    </article>
  );
}
*/
