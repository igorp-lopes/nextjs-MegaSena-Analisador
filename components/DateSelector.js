import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function DateSelector() {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(selectedDate) => {
        console.log(selectedDate);
        debugger;
        setDate(selectedDate);
      }}
    ></DatePicker>
  );
}
