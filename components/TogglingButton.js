import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function TogglingButton({ text, toggled, setToggled }) {
  return (
    <ToggleButton
      type='checkbox'
      variant='primary'
      checked={toggled}
      onChange={(e) => {
        setToggled(e.currentTarget.checked);
      }}
    >
      {text}
    </ToggleButton>
  );
}
