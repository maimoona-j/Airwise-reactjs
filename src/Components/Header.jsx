import React, { useState } from "react";
import logo3 from "../Assets/logo3.png";

export default function Header() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="bg-black bg-opacity-6 shadow-md text-white flex sticky h-16">
      <div>
        <img
          src={logo3}
          alt="logo"
          className="h-16 w-24 flex-shrink-0 ml-8 mb-5"
        />
      </div>

      <div className="flex items-center justify-end flex-1">
        <ul className="flex text-white text-base font-sora space-x-6 mr-16 cursor-pointer">
          <li
            className={`relative  ${
              selectedItem === 0 ? "underline" : ""
            } hover:underline underline-offset-1`}
            onClick={() => handleItemClick(0)}
          >
            Flight
          </li>
          <li
            className={`relative ${
              selectedItem === 1 ? "underline" : ""
            } hover:underline`}
            onClick={() => handleItemClick(1)}
          >
            Hotel
          </li>
          <li
            className={`relative ${
              selectedItem === 2 ? "underline" : ""
            } hover:underline`}
            onClick={() => handleItemClick(2)}
          >
            Airwise point
          </li>
          <li
            className={`relative ${
              selectedItem === 3 ? "underline" : ""
            } hover:underline`}
            onClick={() => handleItemClick(3)}
          >
            Booking
          </li>
          <li
            className={`relative ${
              selectedItem === 4 ? "underline" : ""
            } hover:underline`}
            onClick={() => handleItemClick(4)}
          >
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
}
