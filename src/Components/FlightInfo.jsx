// import React from "react";
// import flight from "../Assets/flight.png";
// import { useNavigate } from "react-router-dom";

// export default function FlightInfo() {
//   const navigate=useNavigate();


//   const handleBook = () => {
//     // Perform sign-in logic here

//     // Redirect to the home page
//     navigate("/book");
//   };




//   return (
//     <div className=" relative bg-white mt-5  h-[245px] w-[1175px] ">
//       <div className="flex flex-col  absolute bottom-[30px] w-[800px] left-8 gap-4    ">
//         <div className="flex inline-flex  w-[667px] h-[87px] ">
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <img
//                 src={flight}
//                 alt="logo"
//                 className="h-16 w-16 mt-2 flex-shrink-0 mr-12 mb-2 text-black"
//               />
//             </div>
//             <div className="ml-12 mt-2">
//               <h5 className="whitespace-nowrap text-gray-400">Flight number</h5>
//               <p>A45E67</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="whitespace-nowrap">13:40 (LOS)</h5>
//               <p>lagos</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="ml-12">2h 30m</h5>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="153"
//                 height="7"
//                 viewBox="0 0 153 7"
//                 fill="none"
//               >
//                 <path
//                   d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM147.347 3.5C147.347 4.97276 148.541 6.16667 150.014 6.16667C151.486 6.16667 152.68 4.97276 152.68 3.5C152.68 2.02724 151.486 0.833333 150.014 0.833333C148.541 0.833333 147.347 2.02724 147.347 3.5ZM3 4L150.014 4V3H3V4Z"
//                   fill="#B0B0B0"
//                 />
//               </svg>
//               <p className="ml-12">1 stop</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="whitespace-nowrap">16:40 (aBV)</h5>
//               <p>Abuja</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-end mr-[130px]">
//         <div className="flex inline-flex  w-[667px] h-[87px] ">
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <img
//                 src={flight}
//                 alt="logo"
//                 className="h-16 w-16 mt-2 flex-shrink-0 mr-12 mb-2 text-black"
//               />
//             </div>
//             <div className="ml-12 mt-2">
//               <h5 className="whitespace-nowrap text-gray-400">Flight number</h5>
//               <p>A45E67</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="whitespace-nowrap">13:40 (LOS)</h5>
//               <p>lagos</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="ml-12">2h 30m</h5>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="153"
//                 height="7"
//                 viewBox="0 0 153 7"
//                 fill="none"
//               >
//                 <path
//                   d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM147.347 3.5C147.347 4.97276 148.541 6.16667 150.014 6.16667C151.486 6.16667 152.68 4.97276 152.68 3.5C152.68 2.02724 151.486 0.833333 150.014 0.833333C148.541 0.833333 147.347 2.02724 147.347 3.5ZM3 4L150.014 4V3H3V4Z"
//                   fill="#B0B0B0"
//                 />
//               </svg>
//               <p className="ml-12">1 stop</p>
//             </div>
//             <div className="ml-12">
//               <h5 className="whitespace-nowrap">16:40 (aBV)</h5>
//               <p>Abuja</p>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//       <div className="w-[1px] h-[245px] absolute left-[800px] bg-gray-400"></div>
//       <div className=" absolute left-[900px] bottom-[60px] w-[200px]  ">
//         <p className="font-sora text-xl text-center font-semibold">$500,00.00</p>
//         <button className="inline-flex text-white  md:p-4 w-[198px] h-[45px] bg-blue-800 rounded-2xl justify-center mt-10 items-center" onClick={handleBook}>
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }





import React, { useState } from "react";
import flight from "../Assets/flight.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

export default function FlightInfo() {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);



  const handleBook = () => {
    setLoading(true);

    // Simulating an asynchronous action
    setTimeout(() => {
      // Perform sign-in logic here

      // Redirect to the home page
      navigate("/book");
    }, 2000);
  };




  return (
    <div className=" relative bg-white mt-5  h-[245px] w-[1175px] ">
      <div className="flex flex-col  absolute bottom-[30px] w-[800px] left-8 gap-4    ">
        <div className="flex inline-flex  w-[667px] h-[87px] ">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={flight}
                alt="logo"
                className="h-16 w-16 mt-2 flex-shrink-0 mr-12 mb-2 text-black"
              />
            </div>
            <div className="ml-12 mt-2">
              <h5 className="whitespace-nowrap text-gray-400">Flight number</h5>
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

        <div className="flex flex-col items-end mr-[130px]">
        <div className="flex inline-flex  w-[667px] h-[87px] ">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={flight}
                alt="logo"
                className="h-16 w-16 mt-2 flex-shrink-0 mr-12 mb-2 text-black"
              />
            </div>
            <div className="ml-12 mt-2">
              <h5 className="whitespace-nowrap text-gray-400">Flight number</h5>
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
      <div className="w-[1px] h-[245px] absolute left-[800px] bg-gray-400"></div>
      <div className=" absolute left-[900px] bottom-[60px] w-[200px]  ">
        <p className="font-sora text-xl text-center font-semibold">$500,00.00</p>
        <button className="inline-flex text-white  md:p-4 w-[198px] h-[45px] bg-blue-800 rounded-2xl justify-center mt-10 items-center"
         onClick={handleBook}
         disabled={loading}
         >
        {loading ? <Spinner /> : "Book Now"}
        </button>
      </div>
    </div>
  );
}
