import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";


import AnalysisCard from "../components/AnalysisCard";
import {fetchOldest, fetchEarliest, fetchOccurrences} from '../helpers/fetchData'

export default function AnalysisAccordion() {

  return (
      <Accordion>
        <AnalysisCard
          category='Ordenar pelo total de Ocorrências'
          eventKey='0'
          dataFetcher={fetchOccurrences}
        ></AnalysisCard>
        <AnalysisCard
          category='Ordenar pela data mais recente de sorteio'
          eventKey='1'
          dataFetcher={fetchEarliest}
        ></AnalysisCard>
        <AnalysisCard
          category='Ordenar pela data mais antiga de sorteio'
          eventKey='2'
          dataFetcher={fetchOldest}
        ></AnalysisCard>
      </Accordion>
  );
}
