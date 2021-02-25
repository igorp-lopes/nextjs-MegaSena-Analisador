import Head from "next/head";
import React from "react";

import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import Body from "../components/Body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Analisador da Mega Sena</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    </div>
  );
}
