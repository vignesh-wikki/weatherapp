import React from "react";

export default function card({
  icon,
  weatherType,
  highTempreatureCelies,
  highTempreatureFahrenheit,
  lowTempreatureCelies,
  lowTempreatureFahrenheit,
  humidity,
  sunriseTime,
  sunsetTime,
  date  
}) {
  return (
    <div>
      <p className=" pb-2 text-center font-bold text-[#444444] leading-[21.09px]">
        {date}
      </p>
      <div className="w-[151.93px] h-[305px] rounded-[7px] border-1 bg-gradient-to-t from-[#464646] to-[#1D2540]">
        <div className="flex items-center justify-center pt-1">
          <img
            className="w-16 h-14 ms-[-20px] "
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather-icon"
          />
          <p className=" text-white font-bold text-[19px] leading-[22.27px] text-center">
            {weatherType}
          </p>
        </div>
        <div>
          <p className="pt-6 text-white font-bold text-[15px] leading-[17.58px] text-center ">
            {highTempreatureCelies?.toFixed(2)}°C /
            {highTempreatureFahrenheit?.toFixed(2)}°F
          </p>
          <p className="pt-6 text-white font-bold text-[15px] leading-[17.58px] text-center ">
            {lowTempreatureCelies?.toFixed(2)}°C /{" "}
            {lowTempreatureFahrenheit?.toFixed(2)}°F
          </p>
          <p className="pt-6 text-white font-bold text-[15px] leading-[17.58px] text-center ">
           {humidity}
          </p>
          <p className="pt-6 text-white font-bold text-[15px] leading-[17.58px] text-center ">
            {sunriseTime} AM
          </p>
          <p className="pt-6 text-white font-bold text-[15px] leading-[17.58px] text-center ">
            {sunsetTime} PM
          </p>
        </div>
      </div>
    </div>
  );
}
