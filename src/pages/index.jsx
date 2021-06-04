import Head from "next/head";
import { SearchShipStop } from "../components/SearchShipStop";

export default function Home({ requiredProps }) {
  return (
    <>
      <Head>
        <title>Nata.house challenge swapi</title>
      </Head>

      <SearchShipStop requiredProps={requiredProps} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://swapi.dev/api/starships/");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const requiredProps = data.results.map(({ name, MGLT, consumables }) => {
    const requiredPropsList = {
      name,
      MGLT,
      consumables,
    };
    return requiredPropsList;
  });

  return {
    props: {
      requiredProps,
    },
  };
}
