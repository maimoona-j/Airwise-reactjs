import React from "react";
import image from "../Assets/image.png";

export default function FlightSummary() {
  return (
    <div className="ml-12">
      <div className="w-[287px] h-[980px] bg-white ">
        <div className="w-[286px] h-[48px]    border-b border-gray-300">
          <h4 className="font-sora text-base font-semibold ml-3 mt-3">
            Booking Summary
          </h4>
        </div>
        <div className="border-b border-gray-300">
          <div className="w-[206px] h-[232px]  ml-4 mt-4 mb-6">
            <p>
              <span className="font-semibold">Depart. </span> Jun 20, 2023 . 1
              stop
            </p>
            <div className="w-[99px] h-[54px] mt-4">
              <p className="font-sora text-base font-semibold leading-normal">
                13:40 (LOS) Lagos Airport
              </p>
            </div>
            <div className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="49"
                viewBox="0 0 6 49"
                fill="none"
              >
                <path
                  d="M3 48.6667C4.47276 48.6667 5.66667 47.4728 5.66667 46C5.66667 44.5272 4.47276 43.3333 3 43.3333C1.52724 43.3333 0.333333 44.5272 0.333333 46C0.333333 47.4728 1.52724 48.6667 3 48.6667ZM3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333336 3 0.333336C1.52724 0.333336 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667ZM3.5 46L3.5 3H2.5L2.5 46H3.5Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>

            <div className="w-[99px] h-[54px] mt-4">
              <p className="font-sora text-base font-semibold leading-normal">
                13:40 (LOS) Lagos Airport
              </p>
            </div>
          </div>

          <div className="border-b border-gray-300">
            <div className="w-[206px] h-[232px]  ml-4 mt-4 mb-6">
              <p>
                <span className="font-semibold">Return. </span> Jun 23, 2023 . 0
                stop
              </p>
              <div className="w-[99px] h-[54px] mt-4">
                <p className="font-sora text-base font-semibold leading-normal">
                  8:40 (ABV) abuja
                </p>
              </div>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="49"
                  viewBox="0 0 6 49"
                  fill="none"
                >
                  <path
                    d="M3 48.6667C4.47276 48.6667 5.66667 47.4728 5.66667 46C5.66667 44.5272 4.47276 43.3333 3 43.3333C1.52724 43.3333 0.333333 44.5272 0.333333 46C0.333333 47.4728 1.52724 48.6667 3 48.6667ZM3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333336 3 0.333336C1.52724 0.333336 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667ZM3.5 46L3.5 3H2.5L2.5 46H3.5Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </div>

              <div className="w-[99px] h-[54px] mt-4">
                <p className="font-sora text-base font-semibold leading-normal">
                  9:50 (LOS) Lagos Airport
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 w-[206px] h-[232px] ">
            <div className="w-[112px] h-[18px]   ml-4 mt-4 mb-6">
              {" "}
              <p className="font-sora text-base font-semibold leading-normal whitespace-nowrap">
                Flight Base Fare
              </p>
            </div>

            <div className="flex">
              <div className="w-[90px] h-[168px] ml-2">
                <p className="mb-3 mt-3 whitespace-nowrap">Adults x1</p>
                <p className="mb-3 whitespace-nowrap">Base Fare</p>
                <p className="mb-3">Discount</p>
                <p className="whitespace-nowrap">Total Fare</p>
              </div>
              <div className=" w-[88px] h-[168px]   ml-16">
                <p className="mb-3 mt-12">$500,00.00</p>
                <p className="mb-3">$0</p>
                <p>$500,00.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[247px] h-[42px] flex mt-[50px] ml-4  ">
          <p className="font-sora text-base font-semibold leading-normal">
            Total:
          </p>
          <p className="font-sora text-base font-semibold leading-normal ml-[130px] ">
            $500,00.00
          </p>
        </div>

        <div className="w-[287px] h-[117px] flex border bg-white mt-16">
          <div>
            <img src={image} alt="image" className="mt-10 ml-3" />
          </div>
          <div className="  w-[183px]  h-[81px] mt-6 ml-8">
            <p>
              For customer support Please call 08 098 774 32 (sunday to friday).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
