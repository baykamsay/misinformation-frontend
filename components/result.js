import styles from "../styles/Results.module.css";

export default function Result(props) {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.nav}>
          <button onClick={props.onBack}>Back</button>
          <span>
            Trust Rating: <span>92</span>
          </span>
        </div>
        <h1>
          Covid: Indian delegates in UK for G7 talks self-isolate after Covid
          cases
        </h1>
        <p>
          By Francesca Gillett <br /> May 04, 2021
        </p>
        {Object.values(props.data).map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </main>
    </div>
  );
}
