import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Login from "./login/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <Header></Header>
    <>
      <Head>
        <title>Schedula</title>
        <meta
          name="description"
          content="This page shows all the doctors"
        ></meta>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      {/* <div>hey</div> */}
      <Login />
    </>
  );
}
