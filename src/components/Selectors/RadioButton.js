import React from 'react';

export default function RadioButton({ id, changed, value, isSelected, label }) {
  return (
    <div>
      <label>
        <input
          className="with-gap"
          id={id}
          onChange={changed}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
