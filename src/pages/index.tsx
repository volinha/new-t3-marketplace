import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home - Marketplace</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <p className="text-2xl text-white">
            {"Welcome"}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
