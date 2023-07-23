// import React from "react";

// import Header from "../Components/Header";
// import SearchBar from "../Components/SearchBar";
// import bg from "../Assets/bg.jpeg";

// export default function Home() {
//   return (
//     <div
//       className="   h-screen overflow-hidden   bg-cover bg-center"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg})`,
//       }}
//     >
//       <Header />
//       <div className="w-auto h-auto ml-36 mt-36 p-4 pb-3">
//         <div className="text-white text-center w-[1049px] h-[179px]">
//           <h1 className="text-6xl font-recoleta-alt font-bold capitalize text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
//             travel around the world
//           </h1>

//           <div className="text-white text-center font-sora text-base font-normal leading-[157%] capitalize mt-12">
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been <br /> the industry's standard
//               dummy text ever since the 1500s, when an unknown printer took a
//               galley
//             </p>
//           </div>
//           <SearchBar />
//         </div>
//       </div>
//     </div>
//   );
// }




// trial



import React from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import bg from "../Assets/bg.jpeg";

export default function Home() {
  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg})`,
      }}
    >
      <Header />
      <div className="w-auto h-auto mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-36 mt-12 sm:mt-24 p-4 pb-3">
        <div className="text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-recoleta-alt font-bold capitalize text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            travel around the world
          </h1>
          <div className="text-white text-center font-sora text-base sm:text-lg md:text-xl font-normal leading-[157%] capitalize mt-6 sm:mt-8 md:mt-10">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been <br /> the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
