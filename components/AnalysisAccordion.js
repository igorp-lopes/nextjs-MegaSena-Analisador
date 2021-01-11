import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";


import AnalysisCard from "../components/AnalysisCard";
import {fetchOldest, fetchEarliest, fetchOccurrences} from '../helpers/fetchData'

export default function AnalysisAccordion({ date }) {
  const [activeKey, setActiveKey] = useState("");

  return (
    <Accordion>
      <AnalysisCard
        category='Total de vezes em que cada dezena foi sorteada'
        eventKey='0'
        dataFetcher={fetchOccurrences}
        date={date}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
      <AnalysisCard
        category='Data última vez em que cada dezena foi sorteada'
        eventKey='1'
        dataFetcher={fetchEarliest}
        date={date}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
      <AnalysisCard
        category='Data da primeira vez em que cada dezena foi sorteada'
        eventKey='2'
        dataFetcher={fetchOldest}
        date={date}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
    </Accordion>
  );
}
