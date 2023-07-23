// import React, { useState } from "react";
// import qr from "../Assets/qr.png";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../Components/Spinner";

// export default function Ticket() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = () => {
//     setLoading(true);

//     // Simulating an asynchronous action
//     setTimeout(() => {
//       // Perform payment logic here
      
//       // After the payment is processed, you can stop the loading state
//       setLoading(false);
//       navigate("/card");
//     }, 2000);
//   };

//   return (
//     <div className="flex w-screen h-screen fixed top-0 left-0   justify-center items-center flex-shrink-0 bg-black bg-opacity-60">
//       <div className="w-[600px] h-[700px] relative flex  flex-col justify-center items-center flex-shrink-0 rounded-2xl mt-[550px] mb-[500px] bg-black">
//         <div className="w-[758px] h-[982px] flex flex-col  items-center gap-8 ">
//           <p className="text-white absolute top-6 font-sora text-2xl font-semibold w-[153px] h-[38px]">
//             Flight Ticket
//           </p>
//           <div className="w-[458px] h-[503px] mt-[80px] bg-white rounded-lg">
//             <div className="w-[253px] h-[220px]  ml-16 mt-8 inline-flex items-start gap-x-20 ">
//               <div className="w-[164px] h-[295px] ">
//                 <div className="w-[164px] h-[49px] flex flex-col  items-start ">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     Passengers Name
//                   </p>
//                   <p className="font-sora text-xs text-black font-semibold mt-1">
//                     Moses, Ebere Elizabeth
//                   </p>
//                 </div>

//                 <div className="w-[119px] h-[49px] flex flex-col items-start mt-5">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     Flight Number
//                   </p>
//                   <p className="font-sora text-xs text-black font-semibold mt-1">
//                     A345R56997
//                   </p>
//                 </div>

//                 <div className="w-[69px] h-[49px] flex flex-col items-start mt-5">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     Class
//                   </p>
//                   <p className="font-sora text-xs text-black font-semibold mt-1">
//                     Economy
//                   </p>
//                 </div>
//               </div>

//               <div className="w-[102px] h-[295px] ">
//                 <div className="w-[102px] h-[49px] flex flex-col items-start ">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     Date
//                   </p>
//                   <p className="font-sora text-xs text-black font-semibold mt-1">
//                     20, june 2023
//                   </p>
//                 </div>

//                 <div className="w-[40px] h-[49px] flex flex-col items-start mt-5">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     Gate
//                   </p>
//                   <p className="font-sora text-xs font-semibold text-black mt-1">
//                     77A
//                   </p>
//                 </div>

//                 <div className="w-[83px] h-[49px] flex flex-col items-start mt-5 ">
//                   <p className="text-gray-400 font-sora text-base font-semibold">
//                     seat
//                   </p>
//                   <p className="font-sora text-xs font-semibold text-black mt-1">
//                     17B - 23B
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex">
//               <div className="w-100 h-100 mt-3  flex-shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   height="80"
//                   viewBox="0 0 50 100"
//                   fill="none"
//                 >
//                   <circle cy="50" r="50" fill="#020202" />
//                 </svg>
//               </div>

//               <div className="mt-10">
//                 <div className="w-[360px] mt-1">
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
//                   <div className="bg-black h-[1px] w-[2%] inline-block"></div>
//                 </div>
//               </div>

//               <div className="w-100 h-100 mt-3 flex-shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   height="80"
//                   viewBox="0 0 50 100"
//                   fill="none"
//                 >
//                   <circle cx="50" cy="50" r="50" fill="#020202" />
//                 </svg>
//               </div>
//             </div>

//             <div className="ml-[130px]  w-[200px] h-[200px]">
//               <img src={qr} alt="qr" />
//             </div>
//           </div>

//           <button className="w-[387px] h-[40px] flex p-15 0 14 0 justify-center items-center rounded-lg bg-blue-900"
//            onClick={handlePayment}
//            disabled={loading}

//            >
//              {loading ? <Spinner /> : "Proceed For Payment"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// trial


import React, { useState } from "react";
import qr from "../Assets/qr.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

export default function Ticket() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    // Simulating an asynchronous action
    setTimeout(() => {
      // Perform payment logic here
      
      // After the payment is processed, you can stop the loading state
      setLoading(false);
      navigate("/card");
    }, 2000);
  };

  return (
    <div className="flex w-screen h-screen fixed top-0 left-0   justify-center items-center flex-shrink-0 bg-black bg-opacity-60">
      <div className="w-[500px] h-[600px] relative flex  flex-col justify-center items-center flex-shrink-0 rounded-2xl mt-[550px] mb-[500px] bg-black">
        <div className="w-[658px] h-[882px] flex flex-col  items-center gap-8 ">
          <p className="text-white absolute top-6 font-sora text-2xl font-semibold w-[153px] h-[38px]">
            Flight Ticket
          </p>
          <div className="w-[358px] h-[403px] mt-[80px] bg-white rounded-lg">
            <div className="w-[153px] h-[120px]  ml-16 mt-8 inline-flex items-start gap-x-20 ">
              <div className="w-[164px] h-[295px] ">
                <div className="w-[164px] h-[19px] flex flex-col  items-start ">
                  <p className="text-gray-400 font-sora text-base font-sm">
                    Passengers Name
                  </p>
                  <p className="font-sora text-xs text-black font-sm mt-1">
                    Moses, Ebere Elizabeth
                  </p>
                </div>

                <div className="w-[119px] h-[49px] flex flex-col items-start mt-5">
                  <p className="text-gray-400 font-sora text-base font-sm">
                    Flight Number
                  </p>
                  <p className="font-sora text-xs text-black font-semibold mt-1">
                    A345R56997
                  </p>
                </div>

                <div className="w-[69px] h-[49px] flex flex-col items-start mt-5">
                  <p className="text-gray-400 font-sora text-base font-semibold">
                    Class
                  </p>
                  <p className="font-sora text-xs text-black font-semibold mt-1">
                    Economy
                  </p>
                </div>
              </div>

              <div className="w-[102px] h-[295px] ">
                <div className="w-[102px] h-[49px] flex flex-col items-start ">
                  <p className="text-gray-400 font-sora text-base font-semibold">
                    Date
                  </p>
                  <p className="font-sora text-xs text-black font-semibold mt-1">
                    20, june 2023
                  </p>
                </div>

                <div className="w-[40px] h-[49px] flex flex-col items-start mt-5">
                  <p className="text-gray-400 font-sora text-base font-semibold">
                    Gate
                  </p>
                  <p className="font-sora text-xs font-semibold text-black mt-1">
                    77A
                  </p>
                </div>

                <div className="w-[83px] h-[49px] flex flex-col items-start mt-5 ">
                  <p className="text-gray-400 font-sora text-base font-semibold">
                    seat
                  </p>
                  <p className="font-sora text-xs font-semibold text-black mt-1">
                    17B - 23B
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-100 h-100 mt-3  flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="80"
                  viewBox="0 0 50 100"
                  fill="none"
                >
                  <circle cy="50" r="50" fill="#020202" />
                </svg>
              </div>

              <div className="mt-10">
                <div className="w-[360px] mt-1">
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-transparent h-[1px] w-[2%] inline-block"></div>
                  <div className="bg-black h-[1px] w-[2%] inline-block"></div>
                </div>
              </div>

              <div className="w-100 h-100 mt-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="80"
                  viewBox="0 0 50 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#020202" />
                </svg>
              </div>
            </div>

            <div className="ml-[130px]  w-[200px] h-[200px]">
              <img src={qr} alt="qr" />
            </div>
          </div>

          <button className="w-[387px] h-[40px] flex p-15 0 14 0 justify-center items-center rounded-lg bg-blue-900"
           onClick={handlePayment}
           disabled={loading}

           >
             {loading ? <Spinner /> : "Proceed For Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}
