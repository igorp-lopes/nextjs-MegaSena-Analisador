import React from 'react';
import DataTable from './components/DataTable/DataTable';
import AnalisysSelectors from './components/Selectors/AnalisysSelectors';

export default function App() {
  return (
    <div className="container">
      <h1>Analisador de resultados da Mega-Sena</h1>
      <div className="row">
        <AnalisysSelectors></AnalisysSelectors>
        <DataTable></DataTable>
      </div>
    </div>
  );
}
