import React from 'react';

export default function DateAnalisysSelector() {
  return (
    <label>
      <input className="with-gap" name="AnalisysType" type="radio" />
      <span>
        Ordenar números pela data em que foram sorteados pela última vez
      </span>
    </label>
  );
}
