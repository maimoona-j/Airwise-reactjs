// import React, { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import location from "../Assets/Location.svg";
// import transfer from "../Assets/transfer.svg";
// import calender from "../Assets/calender.svg";

// export default function SearchBar() {
//   const navigate = useNavigate();
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [selectedOption3, setSelectedOption3] = useState(null);
//   const [isOpen4, setIsOpen4] = useState(false);
//   const [selectedOption4, setSelectedOption4] = useState(null);

//   const handleDropdownToggle1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const handleOptionSelect1 = (option) => {
//     setSelectedOption1(option);
//     setIsOpen1(false);
//   };

//   const handleDropdownToggle2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   const handleOptionSelect2 = (option) => {
//     setSelectedOption2(option);
//     setIsOpen2(false);
//   };

//   const handleDropdownToggle3 = () => {
//     setIsOpen3(!isOpen3);
//   };

//   const handleOptionSelect3 = (option) => {
//     setSelectedOption3(option);
//     setIsOpen3(false);
//   };

//   const handleDropdownToggle4 = () => {
//     setIsOpen4(!isOpen4);
//   };

//   const handleOptionSelect4 = (option) => {
//     setSelectedOption4(option);
//     setIsOpen4(false);
//   };

//   const handleSearch = () => {
//     setLoading(true); // Enable loading state

//     // Perform search logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       setLoading(false); // Disable loading state
//       navigate("/search"); // Navigate to the search page
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div>
//       {loading && <Spinner />}
//       <div className="flex justify-center items-center relative mr-56 p-8 rounded-lg bg-white bg-opacity-10 w-[1190px] mt-16 h-[220px] backdrop-filter backdrop-blur-lg">
//         <div className="absolute left-3 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle1}
//             >
//               Road Trip
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen1 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen1 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption1 && (
//             <p className="text-white">Road Trip: {selectedOption1}</p>
//           )}
//         </div>

//         <div className="absolute left-40 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle2}
//             >
//               Amount of Passenger
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen2 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen2 && (
//               <ul className="absolute top-10 left-0 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption2 && (
//             <p className="text-white">Amount of Passenger: {selectedOption2}</p>
//           )}
//         </div>

//         <div className="absolute left-[388px] top-3">
//           <div className=" ">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle3}
//             >
//               Economy
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen3 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen3 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption3 && (
//             <p className="text-white">Economy: {selectedOption3}</p>
//           )}
//         </div>

//         <div className="absolute left-[505px] top-3">
//           <div className=" ml-8 whitespace-nowrap">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle4}
//             >
//               Flexibility of Date
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen4 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen4 && (
//               <ul className="absolute top-10 left-8 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption4 && (
//             <p className="text-white">Flexibility of Date: {selectedOption4}</p>
//           )}
//         </div>

//         <div className="w-[1156px] h-[117px] relative rounded-full bg-white bg-opacity-25 shadow-lg">
//           <div className="w-[1090px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pr-129 pb-15.992 pl-43 items-center rounded-full bg-white shadow-lg">
//             <div className="flex justify-center items-center space-x-24 mt-6 mr-16">
//               <div className="flex items-center ml-10 ">
//                 <div className="flex ml-2">
//                   <img src={location} alt="" className="w-6 h-6" />
//                   <input
//                     type="text"
//                     placeholder="From where?"
//                     className="text-black ml-2 "
//                   />
//                 </div>
//                 <div className="flex mr-3">
//                   <img src={transfer} alt="" className="ml-4" />
//                   <input
//                     type="text"
//                     placeholder="To where?"
//                     className="text-black ml-10"
//                   />
//                 </div>
//               </div>

//               <div className="w-[2px] h-[50px] bg-gray-300 right-[600px] absolute"></div>

//               <div className="flex items-center  mr-12 ">
//                 <div className="flex items-center ">
//                   <img src={calender} alt="" />
//                   <input
//                     type="text"
//                     placeholder="Leaving on?"
//                     className="text-black ml-2 "
//                   />
//                 </div>
//                 <div className="flex items-center">
//                   <img src={transfer} alt="" className="mr-12 ml-6" />
//                   <input
//                     type="text"
//                     placeholder="Returning on?"
//                     className="text-black "
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div
//                 className="relative left-[1010px] bottom-[50px] mt-2  bg-red-900 h-16 w-16 rounded-full cursor-pointer"
//                 onClick={handleSearch}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   " "
//                 ) : (
//                   // Display the spinner component if `loading` is true
//                   <div className="p-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="35"
//                       height="35"
//                       viewBox="0 0 35 35"
//                       fill="none"
//                     >
//                       <path
//                         d="M32.7852 27.3243L27.2423 21.7815L22.9789 20.0201C24.3985 18.0013 25.159 15.5929 25.1562 13.125C25.1562 6.49093 19.7591 1.09375 13.125 1.09375C6.49093 1.09375 1.09375 6.49093 1.09375 13.125C1.09375 19.7591 6.49093 25.1562 13.125 25.1562C15.6144 25.1591 18.0427 24.3854 20.0716 22.943L21.8284 27.1949L27.3711 32.7381C27.7266 33.0935 28.1486 33.3755 28.613 33.5679C29.0775 33.7603 29.5753 33.8594 30.078 33.8594C30.5807 33.8594 31.0785 33.7604 31.543 33.568C32.0075 33.3757 32.4295 33.0937 32.785 32.7382C33.1405 32.3828 33.4225 31.9607 33.6149 31.4963C33.8073 31.0318 33.9063 30.534 33.9063 30.0313C33.9063 29.5286 33.8073 29.0308 33.615 28.5663C33.4226 28.1019 33.1406 27.6798 32.7852 27.3243ZM3.28125 13.125C3.28125 7.69727 7.69727 3.28125 13.125 3.28125C18.5527 3.28125 22.9688 7.69727 22.9688 13.125C22.9688 18.5527 18.5527 22.9688 13.125 22.9688C7.69727 22.9688 3.28125 18.5527 3.28125 13.125ZM31.2383 31.1913C30.9303 31.4985 30.5131 31.6711 30.0781 31.6711C29.6431 31.6711 29.2259 31.4985 28.918 31.1913L23.6836 25.9569L22.0502 22.0033L26.0039 23.6367L31.2384 28.8711C31.5456 29.179 31.7181 29.5963 31.7181 30.0312C31.718 30.4662 31.5455 30.8834 31.2383 31.1913Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// trial

// import React, { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import location from "../Assets/Location.svg";
// import transfer from "../Assets/transfer.svg";
// import calender from "../Assets/calender.svg";

// export default function SearchBar() {
//   const navigate = useNavigate();
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [selectedOption3, setSelectedOption3] = useState(null);
//   const [isOpen4, setIsOpen4] = useState(false);
//   const [selectedOption4, setSelectedOption4] = useState(null);

//   const handleDropdownToggle1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const handleOptionSelect1 = (option) => {
//     setSelectedOption1(option);
//     setIsOpen1(false);
//   };

//   const handleDropdownToggle2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   const handleOptionSelect2 = (option) => {
//     setSelectedOption2(option);
//     setIsOpen2(false);
//   };

//   const handleDropdownToggle3 = () => {
//     setIsOpen3(!isOpen3);
//   };

//   const handleOptionSelect3 = (option) => {
//     setSelectedOption3(option);
//     setIsOpen3(false);
//   };

//   const handleDropdownToggle4 = () => {
//     setIsOpen4(!isOpen4);
//   };

//   const handleOptionSelect4 = (option) => {
//     setSelectedOption4(option);
//     setIsOpen4(false);
//   };

//   const handleSearch = () => {
//     setLoading(true); // Enable loading state

//     // Perform search logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       setLoading(false); // Disable loading state
//       navigate("/search"); // Navigate to the search page
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div>
//       {loading && <Spinner />}
//       <div className="flex justify-center items-center relative mr-56 p-8 rounded-lg bg-white bg-opacity-10 w-[1190px] mt-16 h-[220px] backdrop-filter backdrop-blur-lg">
//         <div className="absolute left-3 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle1}
//             >
//               Road Trip
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen1 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen1 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption1 && (
//             <p className="text-white">Road Trip: {selectedOption1}</p>
//           )}
//         </div>

//         <div className="absolute left-40 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle2}
//             >
//               Amount of Passenger
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen2 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen2 && (
//               <ul className="absolute top-10 left-0 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption2 && (
//             <p className="text-white">Amount of Passenger: {selectedOption2}</p>
//           )}
//         </div>

//         <div className="absolute left-[388px] top-3">
//           <div className=" ">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle3}
//             >
//               Economy
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen3 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen3 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption3 && (
//             <p className="text-white">Economy: {selectedOption3}</p>
//           )}
//         </div>

//         <div className="absolute left-[505px] top-3">
//           <div className=" ml-8 whitespace-nowrap">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle4}
//             >
//               Flexibility of Date
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen4 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen4 && (
//               <ul className="absolute top-10 left-8 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption4 && (
//             <p className="text-white">Flexibility of Date: {selectedOption4}</p>
//           )}
//         </div>

//         <div className="w-[1156px] h-[117px] relative rounded-full bg-white bg-opacity-25 shadow-lg">
//           <div className="w-[1090px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pr-129 pb-15.992 pl-43 items-center rounded-full bg-white shadow-lg">
//             <div className="flex justify-center items-center space-x-24 mt-6 mr-16">
//               <div className="flex items-center ml-10 ">
//                 <div className="flex ml-2">
//                   <img src={location} alt="" className="w-6 h-6" />
//                   <input
//                     type="text"
//                     placeholder="From where?"
//                     className="text-black ml-2 "
//                   />
//                 </div>
//                 <div className="flex mr-3">
//                   <img src={transfer} alt="" className="ml-4" />
//                   <input
//                     type="text"
//                     placeholder="To where?"
//                     className="text-black ml-10"
//                   />
//                 </div>
//               </div>

//               <div className="w-[2px] h-[50px] bg-gray-300 right-[600px] absolute"></div>

//               <div className="flex items-center  mr-12 ">
//                 <div className="flex items-center ">
//                   <img src={calender} alt="" />
//                   <input
//                     type="text"
//                     placeholder="Leaving on?"
//                     className="text-black ml-2 "
//                   />
//                 </div>
//                 <div className="flex items-center">
//                   <img src={transfer} alt="" className="mr-12 ml-6" />
//                   <input
//                     type="text"
//                     placeholder="Returning on?"
//                     className="text-black "
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div
//                 className="relative left-[1010px] bottom-[50px] mt-2  bg-red-900 h-16 w-16 rounded-full cursor-pointer"
//                 onClick={handleSearch}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   " "
//                 ) : (
//                   // Display the spinner component if `loading` is true
//                   <div className="p-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="35"
//                       height="35"
//                       viewBox="0 0 35 35"
//                       fill="none"
//                     >
//                       <path
//                         d="M32.7852 27.3243L27.2423 21.7815L22.9789 20.0201C24.3985 18.0013 25.159 15.5929 25.1562 13.125C25.1562 6.49093 19.7591 1.09375 13.125 1.09375C6.49093 1.09375 1.09375 6.49093 1.09375 13.125C1.09375 19.7591 6.49093 25.1562 13.125 25.1562C15.6144 25.1591 18.0427 24.3854 20.0716 22.943L21.8284 27.1949L27.3711 32.7381C27.7266 33.0935 28.1486 33.3755 28.613 33.5679C29.0775 33.7603 29.5753 33.8594 30.078 33.8594C30.5807 33.8594 31.0785 33.7604 31.543 33.568C32.0075 33.3757 32.4295 33.0937 32.785 32.7382C33.1405 32.3828 33.4225 31.9607 33.6149 31.4963C33.8073 31.0318 33.9063 30.534 33.9063 30.0313C33.9063 29.5286 33.8073 29.0308 33.615 28.5663C33.4226 28.1019 33.1406 27.6798 32.7852 27.3243ZM3.28125 13.125C3.28125 7.69727 7.69727 3.28125 13.125 3.28125C18.5527 3.28125 22.9688 7.69727 22.9688 13.125C22.9688 18.5527 18.5527 22.9688 13.125 22.9688C7.69727 22.9688 3.28125 18.5527 3.28125 13.125ZM31.2383 31.1913C30.9303 31.4985 30.5131 31.6711 30.0781 31.6711C29.6431 31.6711 29.2259 31.4985 28.918 31.1913L23.6836 25.9569L22.0502 22.0033L26.0039 23.6367L31.2384 28.8711C31.5456 29.179 31.7181 29.5963 31.7181 30.0312C31.718 30.4662 31.5455 30.8834 31.2383 31.1913Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import location from "../Assets/Location.svg";
// import transfer from "../Assets/transfer.svg";
// import calender from "../Assets/calender.svg";

// export default function SearchBar() {
//   const navigate = useNavigate();
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [selectedOption3, setSelectedOption3] = useState(null);
//   const [isOpen4, setIsOpen4] = useState(false);
//   const [selectedOption4, setSelectedOption4] = useState(null);

//   const handleDropdownToggle1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const handleOptionSelect1 = (option) => {
//     setSelectedOption1(option);
//     setIsOpen1(false);
//   };

//   const handleDropdownToggle2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   const handleOptionSelect2 = (option) => {
//     setSelectedOption2(option);
//     setIsOpen2(false);
//   };

//   const handleDropdownToggle3 = () => {
//     setIsOpen3(!isOpen3);
//   };

//   const handleOptionSelect3 = (option) => {
//     setSelectedOption3(option);
//     setIsOpen3(false);
//   };

//   const handleDropdownToggle4 = () => {
//     setIsOpen4(!isOpen4);
//   };

//   const handleOptionSelect4 = (option) => {
//     setSelectedOption4(option);
//     setIsOpen4(false);
//   };

//   const handleSearch = () => {
//     setLoading(true); // Enable loading state

//     // Perform search logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       setLoading(false); // Disable loading state
//       navigate("/search"); // Navigate to the search page
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div>
//       {loading && <Spinner />}
//       <div className="flex flex-col justify-center items-center space-y-6 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mt-8 p-4 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
//         <div className="relative">
//           <button
//             className="w-full py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//             onClick={handleDropdownToggle1}
//           >
//             Road Trip
//             <span
//               className={`ml-2 transition-transform ${
//                 isOpen1 ? "transform rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           {isOpen1 && (
//             <ul className="absolute top-full left-0 w-full z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect1("Option 1")}
//               >
//                 Option 1
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect1("Option 2")}
//               >
//                 Option 2
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect1("Option 3")}
//               >
//                 Option 3
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect1("Option 4")}
//               >
//                 Option 4
//               </li>
//             </ul>
//           )}
//         </div>
//         {selectedOption1 && (
//           <p className="text-white">Road Trip: {selectedOption1}</p>
//         )}

//         <div className="relative">
//           <button
//             className="w-full py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//             onClick={handleDropdownToggle2}
//           >
//             Amount of Passenger
//             <span
//               className={`ml-2 transition-transform ${
//                 isOpen2 ? "transform rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           {isOpen2 && (
//             <ul className="absolute top-full left-0 w-full z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect2("Option 1")}
//               >
//                 Option 1
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect2("Option 2")}
//               >
//                 Option 2
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect2("Option 3")}
//               >
//                 Option 3
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect2("Option 4")}
//               >
//                 Option 4
//               </li>
//             </ul>
//           )}
//         </div>
//         {selectedOption2 && (
//           <p className="text-white">Amount of Passenger: {selectedOption2}</p>
//         )}

//         <div className="relative">
//           <button
//             className="w-full py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//             onClick={handleDropdownToggle3}
//           >
//             Economy
//             <span
//               className={`ml-2 transition-transform ${
//                 isOpen3 ? "transform rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           {isOpen3 && (
//             <ul className="absolute top-full left-0 w-full z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect3("Option 1")}
//               >
//                 Option 1
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect3("Option 2")}
//               >
//                 Option 2
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect3("Option 3")}
//               >
//                 Option 3
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect3("Option 4")}
//               >
//                 Option 4
//               </li>
//             </ul>
//           )}
//         </div>
//         {selectedOption3 && (
//           <p className="text-white">Economy: {selectedOption3}</p>
//         )}

//         <div className="relative">
//           <button
//             className="w-full py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//             onClick={handleDropdownToggle4}
//           >
//             Flexibility of Date
//             <span
//               className={`ml-2 transition-transform ${
//                 isOpen4 ? "transform rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           {isOpen4 && (
//             <ul className="absolute top-full left-0 w-full z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect4("Option 1")}
//               >
//                 Option 1
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect4("Option 2")}
//               >
//                 Option 2
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect4("Option 3")}
//               >
//                 Option 3
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleOptionSelect4("Option 4")}
//               >
//                 Option 4
//               </li>
//             </ul>
//           )}
//         </div>
//         {selectedOption4 && (
//           <p className="text-white">Flexibility of Date: {selectedOption4}</p>
//         )}

//         <div className="relative">
//           <div className="flex justify-center items-center space-x-2">
//             <div className="flex items-center">
//               <img src={location} alt="" className="w-6 h-6" />
//               <input
//                 type="text"
//                 placeholder="From where?"
//                 className="text-black ml-2"
//               />
//             </div>
//             <div className="flex items-center">
//               <img src={transfer} alt="" className="ml-4" />
//               <input
//                 type="text"
//                 placeholder="To where?"
//                 className="text-black ml-2"
//               />
//             </div>
//           </div>
//           <div className="w-full h-[2px] bg-gray-300 my-2"></div>
//           <div className="flex justify-center items-center space-x-2">
//             <div className="flex items-center">
//               <img src={calender} alt="" />
//               <input
//                 type="text"
//                 placeholder="Leaving on?"
//                 className="text-black ml-2"
//               />
//             </div>
//             <div className="flex items-center">
//               <img src={transfer} alt="" className="ml-4" />
//               <input
//                 type="text"
//                 placeholder="Returning on?"
//                 className="text-black ml-2"
//               />
//             </div>
//           </div>
//         </div>

//         <button
//           className={`relative w-16 h-16 rounded-full bg-red-900 cursor-pointer focus:outline-none ${
//             loading ? "pointer-events-none" : ""
//           }`}
//           onClick={handleSearch}
//           disabled={loading}
//         >
//           {loading ? (
//             <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="35"
//               height="35"
//               viewBox="0 0 35 35"
//               fill="none"
//             >
//               <path
//                 d="M32.7852 27.3243L27.2423 21.7815L22.9789 20.0201C24.3985 18.0013 25.159 15.5929 25.1562 13.125C25.1562 6.49093 19.7591 1.09375 13.125 1.09375C6.49093 1.09375 1.09375 6.49093 1.09375 13.125C1.09375 19.7591 6.49093 25.1562 13.125 25.1562C15.6144 25.1591 18.0427 24.3854 20.0716 22.943L21.8284 27.1949L27.3711 32.7381C27.7266 33.0935 28.1486 33.3755 28.613 33.5679C29.0775 33.7603 29.5753 33.8594 30.078 33.8594C30.5807 33.8594 31.0785 33.7604 31.543 33.568C32.0075 33.3757 32.4295 33.0937 32.785 32.7382C33.1405 32.3828 33.4225 31.9607 33.6149 31.4963C33.8073 31.0318 33.9063 30.534 33.9063 30.0313C33.9063 29.5286 33.8073 29.0308 33.615 28.5663C33.4226 28.1019 33.1406 27.6798 32.7852 27.3243ZM3.28125 13.125C3.28125 7.69727 7.69727 3.28125 13.125 3.28125C18.5527 3.28125 22.9688 7.69727 22.9688 13.125C22.9688 18.5527 18.5527 22.9688 13.125 22.9688C7.69727 22.9688 3.28125 18.5527 3.28125 13.125ZM31.2383 31.1913C30.9303 31.4985 30.5131 31.6711 30.0781 31.6711C29.6431 31.6711 29.2259 31.4985 28.918 31.1913L23.6836 25.9569L22.0502 22.0033L26.0039 23.6367L31.2384 28.8711C31.5456 29.179 31.7181 29.5963 31.7181 30.0312C31.718 30.4662 31.5455 30.8834 31.2383 31.1913Z"
//                 fill="white"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// working

// import React, { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import location from "../Assets/Location.svg";
// import transfer from "../Assets/transfer.svg";
// import calender from "../Assets/calender.svg";

// export default function SearchBar() {
//   const navigate = useNavigate();
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [selectedOption3, setSelectedOption3] = useState(null);
//   const [isOpen4, setIsOpen4] = useState(false);
//   const [selectedOption4, setSelectedOption4] = useState(null);

//   const handleDropdownToggle1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const handleOptionSelect1 = (option) => {
//     setSelectedOption1(option);
//     setIsOpen1(false);
//   };

//   const handleDropdownToggle2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   const handleOptionSelect2 = (option) => {
//     setSelectedOption2(option);
//     setIsOpen2(false);
//   };

//   const handleDropdownToggle3 = () => {
//     setIsOpen3(!isOpen3);
//   };

//   const handleOptionSelect3 = (option) => {
//     setSelectedOption3(option);
//     setIsOpen3(false);
//   };

//   const handleDropdownToggle4 = () => {
//     setIsOpen4(!isOpen4);
//   };

//   const handleOptionSelect4 = (option) => {
//     setSelectedOption4(option);
//     setIsOpen4(false);
//   };

//   const handleSearch = () => {
//     setLoading(true); // Enable loading state

//     // Perform search logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       setLoading(false); // Disable loading state
//       navigate("/search"); // Navigate to the search page
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div>
//       {loading && <Spinner />}
//       <div className="flex justify-center items-center relative mr-56 p-8 rounded-lg bg-white bg-opacity-10 w-[1190px] mt-16 h-[220px] backdrop-filter backdrop-blur-lg">
//         <div className="absolute left-3 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle1}
//             >
//               Road Trip
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen1 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen1 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect1("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption1 && (
//             <p className="text-white">Road Trip: {selectedOption1}</p>
//           )}
//         </div>

//         <div className="absolute left-40 top-3">
//           <div className="">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle2}
//             >
//               Amount of Passenger
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen2 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen2 && (
//               <ul className="absolute top-10 left-0 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect2("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption2 && (
//             <p className="text-white">Amount of Passenger: {selectedOption2}</p>
//           )}
//         </div>

//         <div className="absolute left-[388px] top-3">
//           <div className=" ">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle3}
//             >
//               Economy
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen3 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen3 && (
//               <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect3("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption3 && (
//             <p className="text-white">Economy: {selectedOption3}</p>
//           )}
//         </div>

//         <div className="absolute left-[505px] top-3">
//           <div className=" ml-8 whitespace-nowrap">
//             <button
//               className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
//               onClick={handleDropdownToggle4}
//             >
//               Flexibility of Date
//               <span
//                 className={`ml-2 transition-transform ${
//                   isOpen4 ? "transform rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {isOpen4 && (
//               <ul className="absolute top-10 left-8 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 1")}
//                 >
//                   Option 1
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 2")}
//                 >
//                   Option 2
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 3")}
//                 >
//                   Option 3
//                 </li>
//                 <li
//                   className="cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleOptionSelect4("Option 4")}
//                 >
//                   Option 4
//                 </li>
//               </ul>
//             )}
//           </div>
//           {selectedOption4 && (
//             <p className="text-white">Flexibility of Date: {selectedOption4}</p>
//           )}
//         </div>

//         <div className="w-[1156px] h-[117px] relative rounded-full bg-white bg-opacity-25 shadow-lg">
//           <div className="w-[1090px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pr-129 pb-15.992 pl-43 items-center rounded-full bg-white shadow-lg">
//             <div className="flex justify-center items-center space-x-24 mt-6 mr-16 gap-15">
//               <div className="flex items-center ml-10 ">
//                 <div className="flex ml-2">
//                   <img src={location} alt="" className="w-6 h-6" />
//                   <input
//                     type="text"
//                     placeholder="From where?"
//                     className="text-black ml-2 max-w-[120px] "
//                   />
//                 </div>
//                 <div className="flex mr-3">
//                   <img src={transfer} alt="" className="ml-4" />
//                   <input
//                     type="text"
//                     placeholder="To where?"
//                     className="text-black ml-10 max-w-[120px] "
//                   />
//                 </div>
//               </div>

//               <div className="w-[2px] h-[50px] bg-gray-300 right-[600px] absolute"></div>

//               <div className="flex items-center  mr-12 ">
//                 <div className="flex items-center ">
//                   <img src={calender} alt="" />
//                   <input
//                     type="text"
//                     placeholder="Leaving on?"
//                     className="text-black ml-2 max-w-[120px]"
//                   />
//                 </div>
//                 <div className="flex items-center">
//                   <img src={transfer} alt="" className="mr-12 ml-6" />
//                   <input
//                     type="text"
//                     placeholder="Returning on?"
//                     className="text-black max-w-[120px]"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div
//                 className="relative left-[1010px] bottom-[50px] mt-2  bg-red-900 h-16 w-16 rounded-full cursor-pointer"
//                 onClick={handleSearch}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   " "
//                 ) : (
//                   // Display the spinner component if `loading` is true
//                   <div className="p-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="35"
//                       height="35"
//                       viewBox="0 0 35 35"
//                       fill="none"
//                     >
//                       <path
//                         d="M32.7852 27.3243L27.2423 21.7815L22.9789 20.0201C24.3985 18.0013 25.159 15.5929 25.1562 13.125C25.1562 6.49093 19.7591 1.09375 13.125 1.09375C6.49093 1.09375 1.09375 6.49093 1.09375 13.125C1.09375 19.7591 6.49093 25.1562 13.125 25.1562C15.6144 25.1591 18.0427 24.3854 20.0716 22.943L21.8284 27.1949L27.3711 32.7381C27.7266 33.0935 28.1486 33.3755 28.613 33.5679C29.0775 33.7603 29.5753 33.8594 30.078 33.8594C30.5807 33.8594 31.0785 33.7604 31.543 33.568C32.0075 33.3757 32.4295 33.0937 32.785 32.7382C33.1405 32.3828 33.4225 31.9607 33.6149 31.4963C33.8073 31.0318 33.9063 30.534 33.9063 30.0313C33.9063 29.5286 33.8073 29.0308 33.615 28.5663C33.4226 28.1019 33.1406 27.6798 32.7852 27.3243ZM3.28125 13.125C3.28125 7.69727 7.69727 3.28125 13.125 3.28125C18.5527 3.28125 22.9688 7.69727 22.9688 13.125C22.9688 18.5527 18.5527 22.9688 13.125 22.9688C7.69727 22.9688 3.28125 18.5527 3.28125 13.125ZM31.2383 31.1913C30.9303 31.4985 30.5131 31.6711 30.0781 31.6711C29.6431 31.6711 29.2259 31.4985 28.918 31.1913L23.6836 25.9569L22.0502 22.0033L26.0039 23.6367L31.2384 28.8711C31.5456 29.179 31.7181 29.5963 31.7181 30.0312C31.718 30.4662 31.5455 30.8834 31.2383 31.1913Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// trial

import React, { useState } from "react";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
import location from "../Assets/Location.svg";
import transfer from "../Assets/transfer.svg";
import calender from "../Assets/calender.svg";

export default function SearchBar() {
  const navigate = useNavigate();
  const [isOpen1, setIsOpen1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [leavingOn, setLeavingOn] = useState("");
  const [returningOn, setReturningOn] = useState("");

  const handleDropdownToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const handleDropdownToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  const handleDropdownToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleOptionSelect3 = (option) => {
    setSelectedOption3(option);
    setIsOpen3(false);
  };

  const handleDropdownToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleOptionSelect4 = (option) => {
    setSelectedOption4(option);
    setIsOpen4(false);
  };

  // const handleSearch = () => {
  //   setLoading(true); // Enable loading state

  //   // Perform search logic here (e.g., making an API call)
  //   // Simulate delay with setTimeout
  //   setTimeout(() => {
  //     setLoading(false); // Disable loading state
  //     navigate("/search"); // Navigate to the search page
  //   }, 2000); // Adjust the delay (in milliseconds) as needed
  // };

  const handleSearch = () => {
    // Check if any input field is empty
    if (!fromWhere || !toWhere || !leavingOn || !returningOn) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true); // Enable loading state

    // Perform search logic here (e.g., making an API call)
    // Simulate delay with setTimeout
    setTimeout(() => {
      setLoading(false); // Disable loading state
      navigate("/search");
      // Navigate to the search page
      // You can replace the console.log statement with your navigation logic
      console.log("Navigating to search page...");
    }, 2000); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <div>
      {loading && <Spinner />}
      <div className="flex justify-center items-center relative mr-56 p-8 rounded-lg bg-white bg-opacity-10 w-[1190px] mt-16 h-[220px] backdrop-filter backdrop-blur-lg">
        <div className="absolute left-3 top-3">
          <div className="">
            <button
              className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
              onClick={handleDropdownToggle1}
            >
              Road Trip
              <span
                className={`ml-2 transition-transform ${
                  isOpen1 ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen1 && (
              <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect1("Option 1")}
                >
                  Option 1
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect1("Option 2")}
                >
                  Option 2
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect1("Option 3")}
                >
                  Option 3
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect1("Option 4")}
                >
                  Option 4
                </li>
              </ul>
            )}
          </div>
          {selectedOption1 && (
            <p className="text-white">Road Trip: {selectedOption1}</p>
          )}
        </div>

        <div className="absolute left-40 top-3">
          <div className="">
            <button
              className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
              onClick={handleDropdownToggle2}
            >
              Amount of Passenger
              <span
                className={`ml-2 transition-transform ${
                  isOpen2 ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen2 && (
              <ul className="absolute top-10 left-0 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect2("Option 1")}
                >
                  Option 1
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect2("Option 2")}
                >
                  Option 2
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect2("Option 3")}
                >
                  Option 3
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect2("Option 4")}
                >
                  Option 4
                </li>
              </ul>
            )}
          </div>
          {selectedOption2 && (
            <p className="text-white">Amount of Passenger: {selectedOption2}</p>
          )}
        </div>

        <div className="absolute left-[388px] top-3">
          <div className=" ">
            <button
              className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-36 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
              onClick={handleDropdownToggle3}
            >
              Economy
              <span
                className={`ml-2 transition-transform ${
                  isOpen3 ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen3 && (
              <ul className="absolute top-10 left-0 w-36 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect3("Option 1")}
                >
                  Option 1
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect3("Option 2")}
                >
                  Option 2
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect3("Option 3")}
                >
                  Option 3
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect3("Option 4")}
                >
                  Option 4
                </li>
              </ul>
            )}
          </div>
          {selectedOption3 && (
            <p className="text-white">Economy: {selectedOption3}</p>
          )}
        </div>

        <div className="absolute left-[505px] top-3">
          <div className=" ml-8 whitespace-nowrap">
            <button
              className="py-2 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-56 h-8 rounded-lg shadow-md focus:outline-none flex items-center justify-between"
              onClick={handleDropdownToggle4}
            >
              Flexibility of Date
              <span
                className={`ml-2 transition-transform ${
                  isOpen4 ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen4 && (
              <ul className="absolute top-10 left-8 w-56 z-10 text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-lg shadow-md">
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect4("Option 1")}
                >
                  Option 1
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect4("Option 2")}
                >
                  Option 2
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect4("Option 3")}
                >
                  Option 3
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect4("Option 4")}
                >
                  Option 4
                </li>
              </ul>
            )}
          </div>
          {selectedOption4 && (
            <p className="text-white">Flexibility of Date: {selectedOption4}</p>
          )}
        </div>

        <div className="w-[1156px] h-[117px] relative rounded-full bg-white bg-opacity-25 shadow-lg">
          <div className="w-[1090px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pr-129 pb-15.992 pl-43 items-center rounded-full bg-white shadow-lg">
            <div className="flex justify-center items-center space-x-24 mt-6 mr-16 gap-15">
              <div className="flex items-center ml-10 ">
                <div className="flex ml-2">
                  <img src={location} alt="" className="w-6 h-6" />
                  <input
                    type="text"
                    value={fromWhere}
                    onChange={(e) => setFromWhere(e.target.value)}
                    placeholder="From where?"
                    className="text-black ml-2 max-w-[120px] "
                  />
                </div>
                <div className="flex mr-3">
                  <img src={transfer} alt="" className="ml-4" />
                  <input
                    type="text"
                    value={toWhere}
                    onChange={(e) => setToWhere(e.target.value)}
                    placeholder="To where?"
                    className="text-black ml-10 max-w-[120px] "
                  />
                </div>
              </div>

              <div className="w-[2px] h-[50px] bg-gray-300 right-[600px] absolute"></div>

              <div className="flex items-center  mr-12 ">
                <div className="flex items-center ">
                  <img src={calender} alt="" />
                  <input
                    type="text"
                    value={leavingOn}
                    onChange={(e) => setLeavingOn(e.target.value)}
                    placeholder="Leaving on?"
                    className="text-black ml-2 max-w-[120px]"
                  />
                </div>
                <div className="flex items-center">
                  <img src={transfer} alt="" className="mr-12 ml-6" />
                  <input
                    type="text"
                    value={returningOn}
                    onChange={(e) => setReturningOn(e.target.value)}
                    placeholder="Returning on?"
                    className="text-black max-w-[120px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                className="relative left-[1010px] bottom-[50px] mt-2  bg-red-900 h-16 w-16 rounded-full cursor-pointer"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? (
                  " "
                ) : (
                  // Display the spinner component if `loading` is true
                  <div className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M32.7852 27.3243L27.2423 21.7815L22.9789 20.0201C24.3985 18.0013 25.159 15.5929 25.1562 13.125C25.1562 6.49093 19.7591 1.09375 13.125 1.09375C6.49093 1.09375 1.09375 6.49093 1.09375 13.125C1.09375 19.7591 6.49093 25.1562 13.125 25.1562C15.6144 25.1591 18.0427 24.3854 20.0716 22.943L21.8284 27.1949L27.3711 32.7381C27.7266 33.0935 28.1486 33.3755 28.613 33.5679C29.0775 33.7603 29.5753 33.8594 30.078 33.8594C30.5807 33.8594 31.0785 33.7604 31.543 33.568C32.0075 33.3757 32.4295 33.0937 32.785 32.7382C33.1405 32.3828 33.4225 31.9607 33.6149 31.4963C33.8073 31.0318 33.9063 30.534 33.9063 30.0313C33.9063 29.5286 33.8073 29.0308 33.615 28.5663C33.4226 28.1019 33.1406 27.6798 32.7852 27.3243ZM3.28125 13.125C3.28125 7.69727 7.69727 3.28125 13.125 3.28125C18.5527 3.28125 22.9688 7.69727 22.9688 13.125C22.9688 18.5527 18.5527 22.9688 13.125 22.9688C7.69727 22.9688 3.28125 18.5527 3.28125 13.125ZM31.2383 31.1913C30.9303 31.4985 30.5131 31.6711 30.0781 31.6711C29.6431 31.6711 29.2259 31.4985 28.918 31.1913L23.6836 25.9569L22.0502 22.0033L26.0039 23.6367L31.2384 28.8711C31.5456 29.179 31.7181 29.5963 31.7181 30.0312C31.718 30.4662 31.5455 30.8834 31.2383 31.1913Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
