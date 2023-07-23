// import React, { useState } from "react";
// import BookedFlight from "../Components/BookedFlight";
// import FlightSummary from "../Components/FlightSummary";
// import Header from "../Components/Header";
// import PassengerInfo from "../Components/PassenegerInfo";
// import Ticket from "../Components/Ticket";

// export default function FlightBooking() {
//   const [showTicket, setShowTicket] = useState(false);

//   const handleContinue = () => {
//     setShowTicket(true);
//   };

//   return (
//     <div className="bg-gray-50">
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           overflow: "hidden",
//         }}
//       >
//         <div style={{ flex: "1 0 70%" }}>
//           {!showTicket ? (
//             <div className="mt-6">
//               <BookedFlight />
//               <div style={{ marginTop: "1.5rem" }}>
//                 <PassengerInfo onContinue={handleContinue} />
//               </div>
//             </div>
//           ) : (
//             <Ticket />
//           )}
//         </div>
//         <div style={{ flex: "0 0 30%", marginLeft: "1rem", marginTop: "24px" }}>
//           <FlightSummary />
//         </div>
//       </div>
//     </div>
//   );
// }


// working


// import React, { useState } from "react";
// import BookedFlight from "../Components/BookedFlight";
// import FlightSummary from "../Components/FlightSummary";
// import Header from "../Components/Header";
// import PassengerInfo from "../Components/PassenegerInfo";
// import Ticket from "../Components/Ticket";

// export default function FlightBooking() {
//   const [showTicket, setShowTicket] = useState(false);

//   const handleContinue = () => {
//     setShowTicket(true);
//   };

//   return (
//     <div className="bg-gray-50">
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           overflow: "hidden",
//         }}
//       >
//         <div style={{ flex: "1 0 70%" }}>
//           <div className="mt-6">
//             <BookedFlight />
//             <div style={{ marginTop: "1.5rem" }}>
//               <PassengerInfo onContinue={handleContinue} />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             flex: "0 0 30%",
//             marginLeft: "1rem",
//             marginTop: "24px",
//             opacity: showTicket ? 0.5 : 1,
//             transition: "opacity 0.5s ease",
//           }}
//         >
//           <FlightSummary />
//         </div>
//       </div>
//       {showTicket && <Ticket />}
//     </div>
//   );
// }


// working

// import React, { useState } from "react";
// import BookedFlight from "../Components/BookedFlight";
// import FlightSummary from "../Components/FlightSummary";
// import Header from "../Components/Header";
// import PassengerInfo from "../Components/PassenegerInfo";
// import Ticket from "../Components/Ticket";

// export default function FlightBooking() {
//   const [showTicket, setShowTicket] = useState(false);

//   const handleContinue = () => {
//     setShowTicket(true);
//   };

//   return (
//     <div className="bg-gray-50">
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           overflow: "hidden",
//         }}
//       >
//         <div style={{ flex: "1 0 70%" }}>
//           {!showTicket ? (
//             <div className="mt-6">
//               <BookedFlight />
//               <div style={{ marginTop: "1.5rem" }}>
//                 <PassengerInfo onContinue={handleContinue} />
//               </div>
//             </div>
//           ) : (
//             <>
//               <BookedFlight />
//               <PassengerInfo onContinue={handleContinue} />
//               <Ticket />
//             </>
//           )}
//         </div>
//         <div
//           style={{
//             flex: "0 0 30%",
//             marginLeft: "1rem",
//             marginTop: "24px",
//             opacity: showTicket ? 0.1 : 1,
//             // transition: "opacity 0.5s ease",
//           }}
//         >
//           <FlightSummary />
//         </div>
//       </div>
//     </div>
//   );
// }

//  trial



import React, { useState } from "react";
import BookedFlight from "../Components/BookedFlight";
import FlightSummary from "../Components/FlightSummary";
import Header from "../Components/Header";
import PassengerInfo from "../Components/PassenegerInfo";
import Ticket from "../Components/Ticket";

export default function FlightBooking() {
  const [showTicket, setShowTicket] = useState(false);

  const handleContinue = () => {
    setShowTicket(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of the page
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: "1 0 70%" }}>
          {!showTicket ? (
            <div className="mt-6">
              <BookedFlight />
              <div style={{ marginTop: "1.5rem" }}>
                <PassengerInfo onContinue={handleContinue} />
              </div>
            </div>
          ) : (
            <>
              <BookedFlight />
              <PassengerInfo onContinue={handleContinue} />
              <Ticket />
            </>
          )}
        </div>
        <div
          style={{
            flex: "0 0 30%",
            marginLeft: "1rem",
            marginTop: "24px",
            opacity: showTicket ? 0.1 : 1,
          }}
        >
          <FlightSummary />
        </div>
      </div>
    </div>
  );
}
