import Head from "next/head";
import Search from "../components/search";
import Result from "../components/result";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fact Fix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />
      {/* <Result /> */}
    </div>
  );
}
