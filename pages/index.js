import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import DateSelector from "../components/DateSelector";
import RadioSelectors from "../components/RadioSelectors.js";
import AnalysisAccordion from "../components/AnalysisAccordion";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Analisador de resultados da Mega-Sena</h1>
          <Row>
            <Col>
              <div>
                <p>Selecione a data inicial para considerar o filtro</p>
                <DateSelector date={date} setDate={setDate}></DateSelector>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <AnalysisAccordion></AnalysisAccordion>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}
