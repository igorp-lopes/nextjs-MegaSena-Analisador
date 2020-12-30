import React from "react";
import Accordion from "react-bootstrap/Accordion";

import AnalysisCard from "../components/AnalysisCard";

export default function AnalysisAccordion() {
  return (
    <div>
      <Accordion>
        <AnalysisCard
          category='Total de Ocorrências'
          eventKey='0'
        ></AnalysisCard>
        <AnalysisCard
          category='Data mais recente de sorteio'
          eventKey='1'
        ></AnalysisCard>
        <AnalysisCard
          category='Data mais antiga de sorteio'
          eventKey='2'
        ></AnalysisCard>
      </Accordion>
    </div>
  );
}
