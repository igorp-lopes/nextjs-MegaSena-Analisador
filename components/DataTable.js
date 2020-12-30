import { func } from "prop-types";
import React from "react";
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

function DataTable({ tableData }) {
  return (
    <div>
      <Table responsive>
        <TableHeader tableData={tableData}></TableHeader>
      </Table>
    </div>
  );
}

export default DataTable;
