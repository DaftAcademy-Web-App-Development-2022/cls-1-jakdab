import Head from "next/head";

import { NextPageWithLayout } from "~/types/common.types";

import { Layout } from "~/components";
import Main from "../views/Main/Main.view";
import playlistData from "~/data/playlistsData.json";
import { PlaylistModelWithId } from "~/models/playlist.model";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DaftAcademy – WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Main items={playlistData as Array<PlaylistModelWithId>} />
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;