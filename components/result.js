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
        <h1>
          Covid: Indian delegates in UK for G7 talks self-isolate after Covid
          cases
        </h1>
        <p className={styles.description}>
          <i>
            By Francesca Gillett <br /> May 04, 2021
          </i>
        </p>
        {Object.values(props.data).map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </main>
    </div>
  );
}
