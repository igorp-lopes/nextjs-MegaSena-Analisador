import React, { useState } from "react";
import DateSelector from "../components/DateSelector";
import AnalysisAccordion from "../components/AnalysisAccordion";
import TogglingButton from "../components/TogglingButton";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Body() {
  const [date, setDate] = useState(new Date());
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <Container fluid>
        <Jumbotron>
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

export default Body;
