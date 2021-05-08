import styles from "../styles/Results.module.css";

export default function Result(props) {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.nav}>
          <button className={styles.back} onClick={props.onBack}>
            Back
          </button>
          <span className={styles.rating}>
            Trust Rating: <span className={styles.grade}>92</span>
          </span>
        </div>
        <h1>{props.data.payload.title}</h1>
        <p className={styles.description}>
          <i>
            By Francesca Gillett <br /> May 04, 2021
          </i>
        </p>
        <p>{props.data.payload.content /* parse content to look good */}</p>
      </main>
    </div>
  );
}
