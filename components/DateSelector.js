import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function DateSelector({ date, setDate }) {
  return (
    <DatePicker
      selected={date}
      dateFormat={"dd/MM/yyyy"}
      onChange={(selectedDate) => {
        setDate(selectedDate);
      }}
    ></DatePicker>
  );
}
