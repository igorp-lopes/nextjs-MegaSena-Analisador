import React, { useState } from 'react';
import DataTable from './components/DataTable/DataTable';
import AnalisysSelectors from './components/Selectors/AnalisysSelectors';

export default function App() {
  // State variables

  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event) => {
    console.log(`Estado 'selectedRadio': ${event.target.value}`);
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
        <DataTable></DataTable>
      </div>
    </div>
  );
}
