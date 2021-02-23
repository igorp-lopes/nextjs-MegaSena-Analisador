import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import DateSelector from "../components/DateSelector";
import RadioSelectors from "../components/RadioSelectors.js";
import AnalysisAccordion from "../components/AnalysisAccordion";
import TogglingButton from "../components/TogglingButton";
import Body from "../components/Body";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [toggled, setToggled] = useState(false);

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
      <Body></Body>
    </div>
  );
}
