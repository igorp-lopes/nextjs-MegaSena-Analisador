import Head from "next/head";
import styles from "../styles/Home.module.css";
import DateSelector from "../components/DateSelector";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container>
      <h1>Analisador de resultados da Mega-Sena</h1>
      <Row>
        <Col sm={4}>
          <DateSelector></DateSelector>
        </Col>
        <Col>
          <p>Teste</p>
        </Col>
      </Row>
    </Container>
  );
}
