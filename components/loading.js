import styles from "../styles/Spinner.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <span className={styles.text}>Analyzing</span>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
