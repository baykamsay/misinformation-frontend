import Head from "next/head";
import Search from "../components/search";
import Result from "../components/result";
import { useState } from "react";
import Loading from "../components/loading";

export default function Home() {
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);

    setShowResult(true);

    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then((response) => response.json())
      .then((data) => {
        setResultData(data);
      });
  }

  function handleBack() {
    setResultData({});
    setShowResult(false);
  }

  return (
    <div>
      <Head>
        <title>Fact Fix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showResult == false && <Search onSubmit={handleSubmit} />}
      {showResult == true && resultData == {} && <Loading />}
      {showResult == true && resultData != {} && (
        <Result data={resultData} onBack={handleBack} />
      )}
    </div>
  );
}
