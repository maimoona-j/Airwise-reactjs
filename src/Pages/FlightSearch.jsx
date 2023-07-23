// import React from "react";
// import FilterData from "../Components/FilterData";
// import FlightInfo from "../Components/FlightInfo";
// import Header from "../Components/Header";
// import SearchData from "../Components/SearchData";

// export default function FlightSearch() {
//   return (
//     <div
//       className="bg-gray-50"
//       style={{
//         display: "grid",
//         gridTemplateRows: "auto 1fr auto",
//         gridTemplateColumns: "1fr",
//       }}
//     >
//       <Header />
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "min-content 1fr",
//           gap: "2rem",
//         }}
//       >
//         <div className="mt-3" style={{ gridRow: "1 / span 2" }} >
//           <FilterData />
//         </div>
//         <div className="mt-3">
//           <SearchData />
//         </div>

//         <div style={{ position: "relative", marginTop: "4rem" }}>
//           <FlightInfo style={{ marginBottom: "1rem" }} />
//           <FlightInfo
//             style={{ position: "absolute", top: "8rem", marginBottom: "1rem" }}
//           />
//           <FlightInfo
//             style={{ position: "absolute", top: "13rem", marginBottom: "1rem" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }




// working




import React from "react";
import FilterData from "../Components/FilterData";
import FlightInfo from "../Components/FlightInfo";
import Header from "../Components/Header";
import SearchData from "../Components/SearchData";

export default function FlightSearch() {
  return (
    <div
      className="bg-gray-50"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
      }}
    >
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content 1fr",
          gap: "2rem",
        }}
      >
        <div className="mt-3" style={{ gridRow: "1 / span 2", marginTop: "1rem" }}>
          <FilterData />
        </div>
        <div className="mt-3" style={{ marginTop: "1rem" }}>
          <SearchData />
        </div>

        <div style={{ position: "relative", marginTop: "4rem" }}>
          <FlightInfo style={{ marginBottom: "1rem" }} />
          <FlightInfo
            style={{ position: "absolute", top: "8rem", marginBottom: "1rem" }}
          />
          <FlightInfo
            style={{ position: "absolute", top: "13rem", marginBottom: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}


// trial
 




// import React from "react";
// import FilterData from "../Components/FilterData";
// import FlightInfo from "../Components/FlightInfo";
// import Header from "../Components/Header";
// import SearchData from "../Components/SearchData";

// export default function FlightSearch() {
//   return (
//     <div
//       className="bg-gray-50"
//       style={{
//         display: "grid",
//         gridTemplateRows: "auto 1fr auto",
//         gridTemplateColumns: "1fr",
//       }}
//     >
//       <Header />
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "min-content 1fr",
//           gap: "2rem",
//         }}
//       >
//         <div className="mt-3" style={{ gridRow: "1 / span 2", marginTop: "1rem" }}>
//           <FilterData />
//         </div>
//         <div className="mt-3" style={{ marginTop: "1rem" }}>
//           <SearchData />
//         </div>

//         <div style={{ position: "relative", marginTop: "4rem" }}>
//           <FlightInfo style={{ marginBottom: "1rem" }} />
//           <FlightInfo
//             style={{ position: "absolute", top: "8rem", marginBottom: "1rem" }}
//           />
//           <FlightInfo
//             style={{ position: "absolute", top: "13rem", marginBottom: "1rem" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }