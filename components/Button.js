import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Button({
  header,
  id,
  value,
  selectedRadio,
  setSelectedRadio,
}) {
  return (
    <div>
      <ToggleButton
        type='radio'
        key={id}
        name='radio'
        value={value}
        checked={selectedRadio === value}
        onChange={(e) => {
          setSelectedRadio(value);
        }}
      >
        {header}
      </ToggleButton>
    </div>
  );
}
