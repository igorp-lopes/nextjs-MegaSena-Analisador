import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DataTable from "../components/DataTable";

function AnalysisCard({
  category,
  eventKey,
  dataFetcher,
  date,
  activeKey,
  setActiveKey,
}) {
  const handleActiveKey = () => {
    if (activeKey === eventKey) {
      setActiveKey("");
    } else {
      setActiveKey(eventKey);
    }
  };

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant='link'
          eventKey={eventKey}
          onClick={handleActiveKey}
        >
          {category}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          {activeKey === eventKey && (
            <DataTable dataFetcher={dataFetcher} date={date}></DataTable>
          )}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AnalysisCard;
