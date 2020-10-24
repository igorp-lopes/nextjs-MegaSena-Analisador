import React from 'react';
import RecurrencyAnalisysSelector from './RecurrencyAnalisysSelector';
import DateAnalisysSelector from './DateAnalisysSelector';

export default function AnalisysSelectors() {
  return (
    <div>
      <p>Selecione qual informação você deseja saber:</p>
      <div className="left col s4">
        <form action="#">
          <RecurrencyAnalisysSelector></RecurrencyAnalisysSelector>
          <DateAnalisysSelector></DateAnalisysSelector>
        </form>
      </div>
    </div>
  );
}
