import styles from "../../styles/Rating.module.css";

export const ProductRating = ({
  rating,
  starColor,
  starBackground,
  size,
}) => {
  return (
    <div className={styles.ratingContainer}>
      <div
        className={styles.rating}
        style={{
          "--rating": rating,
          "--star-color": starColor,
          "--star-background": starBackground,
          "--size": size,
        }}
      ></div>
      <p className={styles.ratingText}>{rating} out of 5</p>
    </div>
  );
};
