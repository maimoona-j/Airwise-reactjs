import React, { useState } from "react";
import card from "../Assets/card.svg";
import paypal from "../Assets/paypal.svg";
import stripe from "../Assets/Stripe.svg";

export default function CardInfo() {
  const [selectedOption, setSelectedOption] = useState("card");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="w-[1000px] h-[590px] flex items-start gap-[98px]   ml-[260px]  mt-4   ">
        <div className="   w-[580px] h-[500px] pl-5 pt-2 flex flex-col items-start gap-50  bg-white   ">
          <div className="  w-[450px] h-[150px]  ">
            <h2 className="font-sora text-24  font-bold leading-180">
              Card Details
            </h2>
            <p className="text-var(--color-functional-text-darker, #3F3F3F) font-sora    font-xs leading-28 flex flex-col h-[44px]">
              Your new account access begins right after your payment. You will
              have access to unlimited job and the smart designer
            </p>

            <div className="flex mt-6">
              <div className="relative">
                <div
                  className={`absolute w-[25px] h-[25px] top-3 left-3 ${
                    selectedOption !== "card" ? "filter grayscale" : ""
                  }`}
                >
                  <img src={card} alt="" />
                </div>
                <button
                  className={`w-[130px] h-[48px] flex px-39 py-15  justify-center items-center rounded ${
                    selectedOption === "card"
                      ? "bg-blue-900 text-white"
                      : "border border-gray-300 text-gray-300"
                  }`}
                  onClick={() => handleButtonClick("card")}
                >
                  Card
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute w-[20px] h-[20px] top-3 left-12 ${
                    selectedOption !== "paypal" ? "opacity-50" : ""
                  }`}
                >
                  <img src={paypal} alt="" />
                </div>
                <button
                  className={`w-[130px] h-[48px] ml-8 flex px-39 py-15 justify-center items-center rounded ${
                    selectedOption === "paypal"
                      ? "bg-blue-900 text-white"
                      : "border border-gray-300 text-gray-300"
                  }`}
                  onClick={() => handleButtonClick("paypal")}
                >
                  Paypal
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute w-[25px] h-[25px] top-4 left-10 ${
                    selectedOption !== "stripe" ? "opacity-50" : ""
                  }`}
                >
                  <img src={stripe} alt="" />
                </div>
                <button
                  className={`w-[130px] h-[48px] flex ml-[26px] px-39 py-15 justify-center items-center rounded ${
                    selectedOption === "stripe"
                      ? "bg-blue-900 text-white"
                      : "border border-gray-300"
                  }`}
                  onClick={() => handleButtonClick("stripe")}
                >
                  Stripe
                </button>
              </div>
            </div>
          </div>

          <div className="  w-[450px] h-[350px]">
            <div className="flex flex-col items-start mt-5 w-[450px] h-[70px]  ">
              <label
                htmlFor="name"
                className="font-sora text-16 font-normal leading-normal"
              >
                Name On The Card
              </label>
              <input
                type="text"
                className="h-[45px] flex-shrink-0 rounded-10 border border-1.14 border-gray-200 w-[448px]"
              />
            </div>

            <div className="flex flex-col items-start gap-34.203 w-[450px] h-[70px]  ">
              <label
                htmlFor="name"
                className="font-sora text-16 font-normal leading-normal"
              >
                Card Number
              </label>
              <input
                type="number"
                className="h-[45px] flex-shrink-0 rounded border border-1.14 border-gray-200 w-[448px]"
              />
            </div>

            <div className="flex items-start gap-34.203 w-[450px] h-[70px]  ">
              <div className="w-[267px] h-90px]">
                <label
                  htmlFor="name"
                  className="font-sora text-16 font-normal leading-normal"
                >
                  Expiry Date
                </label>
                <input
                  type="number"
                  className="h-[45px] flex-shrink-0 rounded border border-1.14 border-gray-200 w-[180px]"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="font-sora text-16 font-normal ml-8 leading-normal"
                >
                  CVV
                </label>
                <input
                  type="number"
                  className="h-[45px] flex-shrink-0 rounded border border-1.14 ml-8 border-gray-200  w-[180px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-34.203 w-[450px] h-[70px]  ">
              <label
                htmlFor="name"
                className="font-sora text-16 font-normal leading-normal"
              >
                Location
              </label>
              <input
                type="text"
                className="h-[45px] flex-shrink-0 rounded-10 border border-1.14 border-gray-200 w-[448px]"
              />
            </div>
          </div>
          <button className="flex w-[450px] h-[60px] p-2 text-white justify-center mt-5 items-center  bg-blue-900 rounded">
            Pay Now
          </button>
          <div className="w-[450px] h-[38px] mt-3  flex flex-col ">
            <p className="text-center font-open-sans  font-xs leading-1 h-1 ">
              by clicking “PAY” we have agreed that you have read and understand
              to be bound to our terms and condition including billing and
              payment terms sent forth therein.
            </p>
          </div>
        </div>

        <div className="   w-[520px] h-[470px] pl-5 pt-2 bg-white  ">
          <div className="w-[] h-[] border-b border-gray-200 ">
            <div className="w-[267px] h-[38px]  ">
              <h4 className="font-sora text-base font-semibold">
                Book Summary
              </h4>
            </div>
            <div className="w-[190px] h-[190px]  ">
              <div>
                <p className="font-sora text-sm font-normal leading-normal">
                  <span className="bold">Depart.</span> Jun 20, 2023 . 1 stop
                </p>
              </div>
              <div className="w-[99px] h-[54px] mt-2">
                <p>13:40 (LOS) Lagos Airport</p>
              </div>
              <div className="w-43 h-0 mt-3 stroke-1 stroke-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="44"
                  viewBox="0 0 6 49"
                  fill="none"
                >
                  <path
                    d="M3 48.6667C4.47276 48.6667 5.66667 47.4728 5.66667 46C5.66667 44.5272 4.47276 43.3333 3 43.3333C1.52724 43.3333 0.333333 44.5272 0.333333 46C0.333333 47.4728 1.52724 48.6667 3 48.6667ZM3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333336 3 0.333336C1.52724 0.333336 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667ZM3.5 46L3.5 3H2.5L2.5 46H3.5Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </div>
              <div className="w-[84px] h-[54px] mt-12">
                <p className="font-sora text-base font-semibold  leading-normal">
                  16:40 (ABV) abuja
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 mt-3">
            <div className="w-[190px] h-[190px]  ">
              <div>
                <p className="font-sora text-sm font-normal leading-normal">
                  <span className="bold">Return.</span> Jun 23, 2023 . 0 stop
                </p>
              </div>
              <div className="w-[99px] h-[54px] mt-2">
                <p>8:40 (ABV) abuja</p>
              </div>
              <div className="w-43 h-0 mt-3 stroke-1 stroke-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="44"
                  viewBox="0 0 6 49"
                  fill="none"
                >
                  <path
                    d="M3 48.6667C4.47276 48.6667 5.66667 47.4728 5.66667 46C5.66667 44.5272 4.47276 43.3333 3 43.3333C1.52724 43.3333 0.333333 44.5272 0.333333 46C0.333333 47.4728 1.52724 48.6667 3 48.6667ZM3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333336 3 0.333336C1.52724 0.333336 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667ZM3.5 46L3.5 3H2.5L2.5 46H3.5Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </div>
              <div className="w-[100px] h-[54px] mt-12">
                <p className="font-sora text-base font-semibold  leading-normal">
                  9:50 (LOS) Lagos Airport
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex mt-4 items-center gap-40">
            <p className="font-sora text-base font-semibold leading-normal">
              Total{" "}
            </p>
            <p className="font-sora text-sm font-semibold leading-tight">
              $500,00.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
