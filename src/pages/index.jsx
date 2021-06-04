import Head from "next/head";
import { SearchShipStop } from "../components/SearchShipStop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nata.house challenge swapi</title>
      </Head>

      <SearchShipStop />
    </>
  );
}
