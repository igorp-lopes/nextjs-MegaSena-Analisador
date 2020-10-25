import React from 'react';
import RadioButton from './RadioButton';

export default function AnalisysSelectors({ selectedRadio, onChangeRadio }) {
  const handleRadioChange = onChangeRadio;

  return (
    <div>
      <h6>Selecione qual informação você deseja saber:</h6>
      <div className="left col s4">
        <form action="#">
          <RadioButton
            changed={handleRadioChange}
            id="1"
            label="Mostrar números pela quantidade de vezes em que foram sorteados"
            value="RecurrencySelector"
            isSelected={selectedRadio === 'RecurrencySelector'}
          ></RadioButton>

          <RadioButton
            changed={handleRadioChange}
            id="2"
            label="Mostrar números pela data em que foram sorteados pela última vez"
            value="DateSelector"
            isSelected={selectedRadio === 'DateSelector'}
          ></RadioButton>
        </form>
      </div>
    </div>
  );
}
