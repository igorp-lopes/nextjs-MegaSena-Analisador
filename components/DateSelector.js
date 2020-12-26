import React from "react";
import Container from "react-bootstrap/Container";
import Datetime from "react-datetime";
import moment from "moment";


export default function DateSelector() {
  return (
    <Datetime
      dateFormat={"D/MM/YYYY"}
      timeFormat={false}
      initialValue={moment()}
    ></Datetime>
  );
}
