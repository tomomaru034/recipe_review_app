import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./HomeCalendar.css";

const HomeCalendar = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (selectedDate) => {
    // YYYY-MM-DD 形式で取得（タイムゾーンの影響を受けないように調整）
    const formattedDate = selectedDate.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/\//g, "-");
    navigate(`/detail/${formattedDate}`);
  };

  return (
    <div>
      <Calendar
        onChange={(selectedDate) => {
          setDate(selectedDate);
          handleDateClick(selectedDate);
        }}
        value={date}
        formatDay={(locale, date) => date.getDate()}
      />
    </div>
  );
};

export default HomeCalendar;
