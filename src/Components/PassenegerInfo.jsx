import React, { useState } from "react";
import Tick from "../Assets/Tick.svg";

import Ticket from "../Components/Ticket";
import Spinner from "../Components/Spinner";

export default function PassenegerInfo({ onContinue }) {
  const [showTicket, setShowTicket] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkOption, setCheckOption] = useState('');
 

  const handleContinue = () => {
    setLoading(true);

    // Simulating an asynchronous action
    setTimeout(() => {
      setShowTicket(true);
      onContinue();
    }, 2000);
  };

  if (showTicket) {
    return <Ticket />;
  }

  const handleCheckOptionClick = (option) => {
    setCheckOption(option);
  };
  
  return (
    <div className="mt-[250px]  ml-12 ">
      <div className="w-[1020px] h-[50px] bg-white flex">
        <p className="ml-5 mt-3 font-sora text-base font-semibold">
          Passenger Details
        </p>
        <p className="mt-5 ml-[620px] font-sora text-xs font-normal text-gray-400 whitespace-nowrap">
          your personal details are protected
        </p>
      </div>

      <div className=" h-[600px] mt-3 bg-white ">
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-[450px] h-[92px]  ml-[30px] mt-[60px]   ">
              {/* <p className="text-sm font-sora font-medium ">Surname</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2  border border-gray-300 rounded  "
                placeholder="Surname"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]   ml-[30px] mt-[60px]  ">
              {/* <p className="text-sm font-sora font-medium ">First Name</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="First Name"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-[450px] h-[92px]  ml-[30px] mt-[40px]   ">
              {/* <p className="text-sm font-sora font-medium ">Last Name</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Last Name"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]   ml-[30px] mt-[40px]   ">
              {/* <p className="text-sm font-sora font-medium ">Nationality</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Nationality"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-[450px] h-[92px]   ml-[30px] mt-[40px]  ">
              {/* <p className="text-sm font-sora font-medium ">Gender</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Gender"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]   ml-[30px] mt-[40px]   ">
              {/* <p className="text-sm font-sora font-medium ">Date of Birth</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Date Of Birth"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-[450px] h-[92px]   ml-[30px] mt-[40px]    ">
              {/* <p className="text-sm font-sora font-medium ">Email</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Email"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]  ml-[30px] mt-[40px]   ">
              {/* <p className="text-sm font-sora font-medium ">Phone Number</p> */}
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Phone Number"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[116px] mt-12 bg-white  ">
        <div className="">
          <p className="pt-3 ml-6 font-sora text-base font-semibold">
            flight details
          </p>
        </div>
        {/* <p className="mt-3 ml-6 font-sora text-base font-semibold">flight details</p> */}

 



        <select className="w-full h-[47px] border mt-5 pl-3 font-sora text-base font-bold   ">
          <option className="" value="" disabled selected>
            Choose a seat
          </option>
          <option value="1">Seat 1</option>
          <option value="2">Seat 2</option>
          <option value="3">Seat 3</option>
          <option value="4">Seat 4</option>
        </select>
      </div>

      <div className=" h-[30px] w-[760px] mt-5 bg-white ">
        <div className="flex">
          {/* <img   src={isChecked ? Tick : Tick}
        alt="Tick"
        className="w-[30px] h-[30px]"
        style={{ fill: isChecked ? "green" : "gray" }}
        onClick={handleToggleCheck} /> */}

<span
                  className={`cursor-pointer ${
                    checkOption === "cheapest"
                      ? "text-white bg-red-900 rounded"
                      : "text-gray-400 border border-gray-400  rounded"
                  }`}
                  onClick={() => handleCheckOptionClick("cheapest")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    style={{ pointerEvents: "none" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.25 12.4998L11.0718 18.3216L24.7918 4.60162L27.2093 7.01912L11.0718 23.1566L2.79053 14.8753L5.25 12.4998Z"
                      fill="currentColor"
                      className={
                        checkOption === "cheapest"
                          ? "fill-current"
                          : "fill-gray-300"
                      }
                    />
                  </svg>
                </span>




          <p className="text-gray-500 text-center font-poppins ml-3 mt-2 text-xs font-normal">
            By proceeding, I acknowledge that i have read and agree to
            airwise.com's Flight booking terms and condition
          </p>
        </div>
      </div>
      <button
        className="w-[300px] h-[39px] mt-10 mb-10 bg-blue-900 rounded text-white"
        onClick={handleContinue}
        disabled={loading}
      >
        {loading ? <Spinner /> : "Continue"}
      </button>
    </div>
  );
}
