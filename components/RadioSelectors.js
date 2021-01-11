import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../components/Button.js";

export default function RadioSelectors({ selectedRadio, setSelectedRadio }) {
  const radios = [
    { name: "Ocorrências", value: "1" },
    { name: "Mais Recente", value: "2" },
    { name: "Mais Antigo", value: "3" },
  ];

  return (
    <div>
      <ButtonGroup toggle>
        {radios.map((radio, id) => (
          <Button
            key={id}
            value={radio.value}
            header={radio.name}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          ></Button>
        ))}
      </ButtonGroup>
      <p>{selectedRadio}</p>
    </div>
  );
}
