import React from "react";
import flight from "../Assets/flight.png";

export default function BookedFlight() {
  return (
    <div>
      <div className=" ml-5 mt-8 ">
       
        <div className="w-[1010px] h-[50px] ml-7 flex bg-white">
          <p className="ml-5 mt-3 font-sora text-base font-semibold whitespace-nowrap">
            Flight Itinerary
          </p>
          <p className="mt-3 ml-[755px] font-sora text-xs font-semibold cursor-pointer underline text-red-800">
            change
          </p>
        </div>
        <div className="flex flex-col  absolute bottom-[375px] w-[1010px] left-12 mt-5 gap-4 bg-white   ">
          <div className="flex inline-flex  w-[667px] h-[87px] ml-[80px]">
            <div className="flex items-center   ">
              <div className="flex items-center">
                <img
                  src={flight}
                  alt="logo"
                  className="h-16 w-16 mt-2 flex-shrink-0 mr-12 mb-2 text-black"
                />
              </div>
              <div className="ml-12 mt-2">
                <h5 className="whitespace-nowrap text-gray-400">
                  Flight number
                </h5>
                <p>A45E67</p>
              </div>
              <div className="ml-12">
                <h5 className="whitespace-nowrap">13:40 (LOS)</h5>
                <p>lagos</p>
              </div>
              <div className="ml-12">
                <h5 className="ml-12">2h 30m</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="153"
                  height="7"
                  viewBox="0 0 153 7"
                  fill="none"
                >
                  <path
                    d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM147.347 3.5C147.347 4.97276 148.541 6.16667 150.014 6.16667C151.486 6.16667 152.68 4.97276 152.68 3.5C152.68 2.02724 151.486 0.833333 150.014 0.833333C148.541 0.833333 147.347 2.02724 147.347 3.5ZM3 4L150.014 4V3H3V4Z"
                    fill="#B0B0B0"
                  />
                </svg>
                <p className="ml-12">1 stop</p>
              </div>
              <div className="ml-12">
                <h5 className="whitespace-nowrap">16:40 (aBV)</h5>
                <p>Abuja</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end mr-[260px] ">
            <div className="flex inline-flex  w-[667px] h-[87px] ">
              <div className="flex items-center  ">
                <div className="flex items-center">
                  <img
                    src={flight}
                    alt="logo"
                    className="h-16 w-16 mt-2 flex-shrink-0  mb-2 text-black"
                  />
                </div>
                <div className="ml-10 mt-2">
                  <h5 className="whitespace-nowrap text-gray-400">
                    Flight number
                  </h5>
                  <p>A45E67</p>
                </div>
                <div className="ml-12">
                  <h5 className="whitespace-nowrap">13:40 (LOS)</h5>
                  <p>lagos</p>
                </div>
                <div className="ml-12">
                  <h5 className="ml-12">2h 30m</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="153"
                    height="7"
                    viewBox="0 0 153 7"
                    fill="none"
                  >
                    <path
                      d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM147.347 3.5C147.347 4.97276 148.541 6.16667 150.014 6.16667C151.486 6.16667 152.68 4.97276 152.68 3.5C152.68 2.02724 151.486 0.833333 150.014 0.833333C148.541 0.833333 147.347 2.02724 147.347 3.5ZM3 4L150.014 4V3H3V4Z"
                      fill="#B0B0B0"
                    />
                  </svg>
                  <p className="ml-12">1 stop</p>
                </div>
                <div className="ml-12">
                  <h5 className="whitespace-nowrap">16:40 (aBV)</h5>
                  <p>Abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
