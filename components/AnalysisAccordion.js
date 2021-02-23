import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

import AnalysisCard from "../components/AnalysisCard";
import {
  fetchOldest,
  fetchEarliest,
  fetchOccurrences,
} from "../helpers/fetchData";

export default function AnalysisAccordion({ date }) {
  const [activeKey, setActiveKey] = useState("");
  const [dataOccurrences, setDataOccurrences] = useState();
  const [dataOldestDate, setDataOldestDate] = useState();
  const [dataEarliestDate, setDataEarliestDate] = useState();

  useEffect(() => {
    const fetchOccurrencesData = async () => {
      const jsonData = await fetchOccurrences(date);
      setDataOccurrences(jsonData);
    };

    const fetchOldestDateData = async () => {
      const jsonData = await fetchOldest(date);
      setDataOldestDate(jsonData);
    };

    const fetchEarliestDateData = async () => {
      const jsonData = await fetchEarliest(date);
      setDataEarliestDate(jsonData);
    };

    fetchOccurrencesData();
    fetchOldestDateData();
    fetchEarliestDateData();
  }, [date]);

  return (
    <Accordion>
      <AnalysisCard
        category='Total de vezes em que cada dezena foi sorteada'
        eventKey='0'
        tableData={dataOccurrences}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
      <AnalysisCard
        category='Data última vez em que cada dezena foi sorteada'
        eventKey='1'
        tableData={dataEarliestDate}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
      <AnalysisCard
        category='Data da primeira vez em que cada dezena foi sorteada'
        eventKey='2'
        tableData={dataOldestDate}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      ></AnalysisCard>
    </Accordion>
  );
}
