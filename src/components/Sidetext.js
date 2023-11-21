import React, { useState } from "react";

export default function Sidetext({ handleDate }) {
  const [selectedDate, setSelectedDate] = useState("");
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
    console.log(selectedDate);

    handleDate(selectedDate);
  };
  return (
    <div>
      <div className="mt-[-12px]">
        <p>Select Date:</p>
        <input
        value={selectedDate}
          onChange={handleChange}
          type="date"
          className="bg-[#d9d9d9] p-1 w-[127px] rounded-[3px]"
        />
      </div>

      <p className="pt-4 text-[15px] leading-[17.58px] font-medium">
        High Temperature
      </p>
      <p className="pt-5 text-[15px] leading-[17.58px] font-medium">
        Low Temperature
      </p>
      <p className="pt-5 text-[15px] leading-[17.58px] font-medium">Humidity</p>
      <p className="pt-5 text-[15px] leading-[17.58px] font-medium">
        Sunrise Time
      </p>
      <p className="pt-5 text-[15px] leading-[17.58px] font-medium">
        Sunset Time
      </p>
    </div>
  );
}
