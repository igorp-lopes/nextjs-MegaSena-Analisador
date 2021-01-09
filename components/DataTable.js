import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

function getKeys(tableRow) {
  return Object.keys(tableRow);
}

const getTableHeader = function (tableData) {
  const tableKeys = getKeys(tableData[0]);

  return tableKeys.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

function TableHeader({ tableData }) {
  return (
    <thead>
      <tr>{getTableHeader(tableData)}</tr>
    </thead>
  );
}

function getTableBody(tableData) {
  const tableKeys = getKeys(tableData[0]);

  return tableData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data[tableKeys[0]]}</td>
        <td>{data[tableKeys[1]]}</td>
      </tr>
    );
  });
}

function TableBody({ tableData }) {
  return <tbody>{getTableBody(tableData)}</tbody>;
}

function DataTable({ dataFetcher }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await dataFetcher();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <Table responsive>
          <TableHeader tableData={data}></TableHeader>
          <TableBody tableData={data}></TableBody>
        </Table>
      ) : (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Carregando...</span>
        </Spinner>
      )}
    </div>
  );
}

export default DataTable;
