import Head from "next/head";
import styles from "../styles/Home.module.css";
import DateSelector from "../components/DateSelector";
import React, { useState } from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Container>
        <h1>Analisador de resultados da Mega-Sena</h1>
        <Row>
          <Col sm={4}>
            <DateSelector date={date} setDate={setDate}></DateSelector>
          </Col>
          <Col>
            <p>{date.toLocaleDateString()}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
