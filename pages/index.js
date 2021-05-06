import Head from "next/head";
import Search from "../components/search";
import Result from "../components/result";
import { useState } from "react";
import Loading from "../components/loading";

export default function Home() {
  const [currentState, setCurrentState] = useState(0);
  const [resultData, setResultData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    setCurrentState(1);
    window.setTimeout(() => {
      fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then((response) => response.json())
        .then((data) => {
          setResultData(data);
          setCurrentState(2);
        });
    }, 1000);
  }

  function handleBack() {
    setCurrentState(0);
    setResultData({});
  }

  return (
    <div>
      <Head>
        <title>Fact Fix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {currentState === 0 && <Search onSubmit={handleSubmit} />}
      {currentState === 1 && <Loading />}
      {currentState === 2 && <Result data={resultData} onBack={handleBack} />}
    </div>
  );
}
