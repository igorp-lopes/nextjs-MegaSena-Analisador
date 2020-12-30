import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AnalysisCard({ category, eventKey }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant='primary' eventKey={eventKey}>
          {category}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AnalysisCard;
