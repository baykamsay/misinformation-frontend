import Head from "next/head";
import Search from "../components/search";
import Result from "../components/result";
import { useState } from "react";
import Loading from "../components/loading";

export default function Home() {
  const [currentState, setCurrentState] = useState(0);
  const [resultData, setResultData] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    setCurrentState(1);

    const url = { url: e.target[0].value };

    const response = await fetch("localhost:8080/api/v1/analyse", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(url),
    });

    setResultData(await response.json());
    setCurrentState(2);
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
