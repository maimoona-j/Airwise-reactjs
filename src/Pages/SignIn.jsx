// import { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import signin from "../Assets/signin.jpg";
// import logo3 from "../Assets/logo3.png";

// export default function SignIn() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSignIn = () => {
//     setLoading(true); // Enable loading state

//     // Perform sign-in logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       // Redirect to the home page
//       setLoading(false); // Disable loading state
//       navigate("/home");
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div className="relative h-screen">
//       <div className="absolute inset-0 flex">
//         <div className="h-full w-1/2 relative">
//           <div
//             className="absolute inset-0 bg-black opacity-50"
//             style={{ mixBlendMode: "multiply" }}
//           ></div>
//           <img src={signin} alt="bg" className="h-full w-full object-cover" />
//         </div>
//         <div className="h-full w-1/2 bg-white"></div>
//       </div>

//       <img src={logo3} alt="logo" className="absolute top-0 left-0 mt-36" />

//       <div className="absolute w-[415px]  h-[480px] top-[100px] right-[50px] bottom-[200px] left-[942px]   flex flex-col items-center justify-center   ">
//         <div className=" flex flex-col items-center gap-8.551px">
//           <h2 className="text-center text-lg font-sora font-semibold tracking-wide mt-16 ">
//             Welcome Back!
//           </h2>
//           <p className="text-gray-600 text-sm font-poppins font-normal tracking-normal mt-4  ">
//             Sign in with your full details
//           </p>
//         </div>

//         <div className="mt-16 flex flex-col  w-[319px]  ">
//           <label htmlFor="email" className="font-poppins">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 border rounded mt-2"
//           />
//         </div>
//         <div className="relative flex flex-col w-[319px] mt-5   ">
//           <label htmlFor="password" className="font-poppins">
//             Password
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             className="px-4 py-2 border border-gray-200 rounded mt-2"
//           />
//           {showPassword ? (
//             <AiFillEyeInvisible
//               className="absolute right-3 top-11 text-xl cursor-pointer"
//               onClick={() => setShowPassword((prevState) => !prevState)}
//             />
//           ) : (
//             <AiFillEye
//               className="absolute right-3 top-11 text-xl cursor-pointer"
//               onClick={() => setShowPassword((prevState) => !prevState)}
//             />
//           )}
//           <Link
//             to="/forgotpassword"
//             className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-56 mt-2 text-xs font-poppins whitespace-nowrap"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         {loading && <Spinner />}

//         <button
//           className="bg-blue-900 text-white w-[319px] px-4 py-2 rounded font-poppins mt-16"
//           onClick={handleSignIn}
//           disabled={loading} // Disable the button if `loading` is true
//         >
//           {loading ? "Signing In..." : "Sign In"}{" "}
//           {/* Display different text based on `loading` state */}
//         </button>

//         <p className="mb-6 text-black text-xs mt-12 font-poppins">
//           Don't have an account yet?
//           <Link
//             to="/signup"
//             className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//           >
//             Get Started
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// trial

// import { useState } from "react";
// import Spinner from "../Components/Spinner";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import signin from "../Assets/signin.jpg";
// import logo3 from "../Assets/logo3.png";

// export default function SignIn() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSignIn = () => {
//     setLoading(true); // Enable loading state

//     // Perform sign-in logic here (e.g., making an API call)
//     // Simulate delay with setTimeout
//     setTimeout(() => {
//       // Redirect to the home page
//       setLoading(false); // Disable loading state
//       navigate("/home");
//     }, 2000); // Adjust the delay (in milliseconds) as needed
//   };

//   return (
//     <div className="relative h-screen">
//       <div className="absolute inset-0 flex flex-col">
//         <div className="h-1/2 relative">
//           <div className="absolute inset-0 bg-black opacity-50" style={{ mixBlendMode: "multiply" }}></div>
//           <img src={signin} alt="bg" className="h-full w-full object-cover" />
//         </div>
//         <div className="h-1/2 bg-white flex flex-col items-center justify-center p-8">
//           <img src={logo3} alt="logo" className="w-24 h-24 mb-4" />

//           <div className="flex flex-col items-center gap-8.551px">
//             <h2 className="text-center text-lg font-sora font-semibold tracking-wide">
//               Welcome Back!
//             </h2>
//             <p className="text-gray-600 text-sm font-poppins font-normal tracking-normal">
//               Sign in with your full details
//             </p>
//           </div>

//           <div className="mt-8 flex flex-col w-64">
//             <label htmlFor="email" className="font-poppins">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 border rounded mt-2"
//             />
//           </div>

//           <div className="relative flex flex-col w-64 mt-4">
//             <label htmlFor="password" className="font-poppins">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               className="px-4 py-2 border border-gray-200 rounded mt-2"
//             />
//             {showPassword ? (
//               <AiFillEyeInvisible
//                 className="absolute right-3 top-11 text-xl cursor-pointer"
//                 onClick={() => setShowPassword((prevState) => !prevState)}
//               />
//             ) : (
//               <AiFillEye
//                 className="absolute right-3 top-11 text-xl cursor-pointer"
//                 onClick={() => setShowPassword((prevState) => !prevState)}
//               />
//             )}
//             <Link
//               to="/forgotpassword"
//               className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out mt-2 text-xs font-poppins whitespace-nowrap"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {loading && <Spinner />}

//           <button
//             className="bg-blue-900 text-white w-64 px-4 py-2 rounded font-poppins mt-8"
//             onClick={handleSignIn}
//             disabled={loading} // Disable the button if `loading` is true
//           >
//             {loading ? "Signing In..." : "Sign In"}{" "}
//             {/* Display different text based on `loading` state */}
//           </button>

//           <p className="text-black text-xs mt-8 font-poppins">
//             Don't have an account yet?
//             <Link
//               to="/signup"
//               className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//             >
//               Get Started
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






 
import { useState } from "react";
import Spinner from "../Components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import signin from "../Assets/signin.jpg";
import logo3 from "../Assets/logo3.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true); // Enable loading state

    // Perform sign-in logic here (e.g., making an API call)
    // Simulate delay with setTimeout
    setTimeout(() => {
      // Redirect to the home page
      setLoading(false); // Disable loading state
      navigate("/home");
    }, 2000); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <div className="relative h-screen ">
      <div className="absolute inset-0 flex">
        <div className="h-full w-1/2 relative">
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <img src={signin} alt="bg" className="h-full w-full object-cover" />
        </div>
        {/* <div className="h-full w-1/2 bg-white"></div> */}
      </div>

      <img src={logo3} alt="logo" className="absolute top-0 left-0 mt-36" />

      <div className="absolute w-[415px]  h-[480px] top-[100px] right-[50px] bottom-[200px] left-[942px]   flex flex-col items-center justify-center   ">
        <div className=" flex flex-col items-center gap-8.551px">
          <h2 className="text-center text-lg font-sora font-semibold tracking-wide mt-16 ">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-sm font-poppins font-normal tracking-normal mt-4  ">
            Sign in with your full details
          </p>
        </div>

        <div className="mt-16 flex flex-col  w-[319px]  ">
          <label htmlFor="email" className="font-poppins">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded mt-2"
          />
        </div>
        <div className="relative flex flex-col w-[319px] mt-5   ">
          <label htmlFor="password" className="font-poppins">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="px-4 py-2 border border-gray-200 rounded mt-2"
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="absolute right-3 top-11 text-xl cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="absolute right-3 top-11 text-xl cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          )}
          <Link
            to="/forgotpassword"
            className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-56 mt-2 text-xs font-poppins whitespace-nowrap"
          >
            Forgot Password?
          </Link>
        </div>

        {loading && <Spinner />}

        <button
          className="bg-blue-900 text-white w-[319px] px-4 py-2 rounded font-poppins mt-16"
          onClick={handleSignIn}
          disabled={loading} // Disable the button if `loading` is true
        >
          {loading ? "Signing In..." : "Sign In"}{" "}
          {/* Display different text based on `loading` state */}
        </button>

        <p className="mb-6 text-black text-xs mt-12 font-poppins">
          Don't have an account yet?
          <Link
            to="/signup"
            className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
          >
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

 