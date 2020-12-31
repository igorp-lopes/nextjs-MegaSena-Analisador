import React from "react";
import Accordion from "react-bootstrap/Accordion";

import AnalysisCard from "../components/AnalysisCard";

export default function AnalysisAccordion() {

  const testJson = {
    numeros: [
      { numero: 1, ocorrencias: 231 },
      { numero: 2, ocorrencias: 238 },
      { numero: 3, ocorrencias: 212 },
      { numero: 4, ocorrencias: 251 },
      { numero: 5, ocorrencias: 257 },
      { numero: 6, ocorrencias: 240 },
      { numero: 7, ocorrencias: 221 },
      { numero: 8, ocorrencias: 231 },
      { numero: 9, ocorrencias: 214 },
      { numero: 10, ocorrencias: 265 },
      { numero: 11, ocorrencias: 236 },
      { numero: 12, ocorrencias: 228 },
      { numero: 13, ocorrencias: 236 },
      { numero: 14, ocorrencias: 220 },
      { numero: 15, ocorrencias: 206 },
      { numero: 16, ocorrencias: 240 },
      { numero: 17, ocorrencias: 242 },
      { numero: 18, ocorrencias: 234 },
      { numero: 19, ocorrencias: 218 },
      { numero: 20, ocorrencias: 224 },
      { numero: 21, ocorrencias: 203 },
      { numero: 22, ocorrencias: 202 },
      { numero: 23, ocorrencias: 254 },
      { numero: 24, ocorrencias: 245 },
      { numero: 25, ocorrencias: 215 },
      { numero: 26, ocorrencias: 193 },
      { numero: 27, ocorrencias: 249 },
      { numero: 28, ocorrencias: 247 },
      { numero: 29, ocorrencias: 240 },
      { numero: 30, ocorrencias: 246 },
      { numero: 31, ocorrencias: 219 },
      { numero: 32, ocorrencias: 235 },
      { numero: 33, ocorrencias: 255 },
      { numero: 34, ocorrencias: 243 },
      { numero: 35, ocorrencias: 241 },
      { numero: 36, ocorrencias: 239 },
      { numero: 37, ocorrencias: 248 },
      { numero: 38, ocorrencias: 235 },
      { numero: 39, ocorrencias: 219 },
      { numero: 40, ocorrencias: 224 },
      { numero: 41, ocorrencias: 240 },
      { numero: 42, ocorrencias: 251 },
      { numero: 43, ocorrencias: 245 },
      { numero: 44, ocorrencias: 240 },
      { numero: 45, ocorrencias: 227 },
      { numero: 46, ocorrencias: 230 },
      { numero: 47, ocorrencias: 224 },
      { numero: 48, ocorrencias: 211 },
      { numero: 49, ocorrencias: 234 },
      { numero: 50, ocorrencias: 233 },
      { numero: 51, ocorrencias: 239 },
      { numero: 52, ocorrencias: 237 },
      { numero: 53, ocorrencias: 264 },
      { numero: 54, ocorrencias: 247 },
      { numero: 55, ocorrencias: 196 },
      { numero: 56, ocorrencias: 238 },
      { numero: 57, ocorrencias: 219 },
      { numero: 58, ocorrencias: 230 },
      { numero: 59, ocorrencias: 227 },
      { numero: 60, ocorrencias: 216 },
    ],
  };

  return (
    <div>
      <Accordion>
        <AnalysisCard
          category='Ordenar pelo total de Ocorrências'
          eventKey='0'
          tableData={testJson['numeros']}
        ></AnalysisCard>
        <AnalysisCard
          category='Ordenar pela data mais recente de sorteio'
          eventKey='1'
          tableData={testJson['numeros']}
        ></AnalysisCard>
        <AnalysisCard
          category='Ordenar pela data mais antiga de sorteio'
          eventKey='2'
          tableData={testJson['numeros']}
        ></AnalysisCard>
      </Accordion>
    </div>
  );
}
