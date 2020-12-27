import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

export default function DateSelector({ date, setDate }) {
  return (
    <DatePicker
      selected={date}
      dateFormat={"dd/MM/yyyy"}
      customInput={
        <Button variant='primary'>{date.toLocaleDateString()}</Button>
      }
      onChange={(selectedDate) => {
        setDate(selectedDate);
      }}
    ></DatePicker>
  );
}
