import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DataTable from "../components/DataTable";

function AnalysisCard({ category, eventKey, tableData }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant='link' eventKey={eventKey}>
          {category}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <DataTable tableData={tableData}></DataTable>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AnalysisCard;
