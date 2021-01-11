import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import DateSelector from "../components/DateSelector";
import RadioSelectors from "../components/RadioSelectors.js";
import AnalysisAccordion from "../components/AnalysisAccordion";
import TogglingButton from "../components/TogglingButton";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <Row>
            <Col>
              <h1>Analisador de resultados da Mega-Sena</h1>
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <TogglingButton
                text='Filtrar as análises a partir de uma data específica'
                toggled={toggled}
                setToggled={setToggled}
              ></TogglingButton>
              {toggled ? (
                <div>
                  <p> Selecione uma data para o filtro</p>
                  <DateSelector date={date} setDate={setDate}></DateSelector>
                </div>
              ) : (
                <div></div>
              )}
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <AnalysisAccordion
                date={toggled && date.toLocaleDateString()}
              ></AnalysisAccordion>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}
