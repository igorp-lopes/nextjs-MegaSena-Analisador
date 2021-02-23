import Head from "next/head";
import React from "react";

import Header from "../components/Header";
import Body from "../components/Body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Analisador da Mega Sena</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Igor Peterossi Lopes'></meta>
        <meta
          name='description'
          content='Analisador de resultados da loteria da Mega Sena'
        ></meta>
        <meta
          name='keywords'
          content='Mega, Sena, Loteria, Análise, Analisador'
        ></meta>
      </Head>
      <Header></Header>
      <Body></Body>
    </div>
  );
}
