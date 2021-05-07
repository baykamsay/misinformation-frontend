import styles from "../styles/Home.module.css";

export default function Search(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Fact Fix</h1>

        <p className={styles.description}>
          Analyze news articles and get a trust rating in seconds!
        </p>

        <form className={styles.grid} onSubmit={props.onSubmit}>
          <input
            className={styles.input}
            style={{ flexGrow: "2" }}
            type="text"
            placeholder="Enter article URL"
          />
          <button className={styles.button} type="submit">
            Analyze
          </button>
        </form>
      </main>
    </div>
  );
}
