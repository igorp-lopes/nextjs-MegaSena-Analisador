import React, { useState } from 'react';
import DataTable1 from './components/DataTable/DataTable1';
import DataTable2 from './components/DataTable/DataTable2';
import AnalisysSelectors from './components/Selectors/AnalisysSelectors';

export default function App() {
  // State variables

  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className="container">
      <h1>Analisador de resultados da Mega-Sena</h1>
      <div className="row">
        <AnalisysSelectors
          selectedRadio={selectedRadio}
          onChangeRadio={handleRadioChange}
        ></AnalisysSelectors>
        {selectedRadio === 'RecurrencySelector' && <DataTable1></DataTable1>}
        {selectedRadio === 'DateSelector' && <DataTable2></DataTable2>}
      </div>
    </div>
  );
}
