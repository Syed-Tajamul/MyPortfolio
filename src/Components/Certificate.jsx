// import { useEffect, useRef } from "react";
// import toast from "react-hot-toast";
// import VanillaTilt from "vanilla-tilt";
// export default function Certificate({ certificate }) {
//   const { title, instructor, completionDate, platfrom, link } = certificate;
//   function handleClick() {
//     toast.custom((t) => (
//       <div
//         className={`${
//           t.visible ? "animate-enter" : "animate-leave"
//         } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
//       >
//         <div className="flex-1 w-0 p-4">
//           <div className="flex items-start">
//             <div className="ml-3 flex-1">
//               <p className="text-sm font-medium text-gray-900">Hey traveller</p>
//               <p className="mt-1 text-sm text-gray-500">
//                 plz bear with me! link to the certificate will b available soon
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex border-l border-gray-200">
//           <button
//             onClick={() => toast.dismiss(t.id)}
//             className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     ));
//   }
//   const tiltRef = useRef(null);
//   useEffect(() => {
//     const element = tiltRef.current;
//     if (element) {
//       VanillaTilt.init(element, {
//         max: 12,
//         speed: 400,
//         // glare: true,
//         // "max-glare": 0.5,
//       });

//       // Clean up tilt effect on unmount
//       return () => {
//         element.vanillaTilt.destroy();
//       };
//     }
//   }, []);
//   return (
//     <div
//       ref={tiltRef}
//       className="border-2 border-gray-200 hover:backdrop-blur-3xl  transition-colors  duration-300 hover:transition-colors hover:duration-300  cursor-pointer hover:bg-white/10  w-[300px] h-[350px]  rounded-md flex flex-col justify-start items-center gap-4 pt-10"
//     >
//       <h1 className="text-center text-lg font-medium ">{title}</h1>
//       <p className="text-base text-medium ">{instructor}</p>

//       <p className="text-sm text-medium text-stone-400">{completionDate}</p>

//       <p className="text-sm text-medium text-stone-400">{platfrom}</p>
//       <p onClick={handleClick} className="text-sm text-medium text-blue-400">
//         {link}
//       </p>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import VanillaTilt from "vanilla-tilt";

export default function Certificate({ certificate }) {
  const { title, instructor, completionDate, platform, link } = certificate;

  function handleClick() {
    console.log("clicked");
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Hey traveler</p>
              <p className="font-poppins mt-1 text-sm text-gray-500">
                Please bear with me! Link to the certificate will be available
                soon.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }

  const tiltRef = useRef(null);
  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 12,
        speed: 400,
        // glare: true,
        // "max-glare": 0.5,
      });

      // Clean up tilt effect on unmount
      return () => {
        element.vanillaTilt.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      className="max-md:w-[340px] max-md:h-full max-md:py-6 bg-stone-900 border-2 border-gray-200 hover:backdrop-blur-3xl transition-colors duration-300 hover:transition-colors hover:duration-300 cursor-pointer hover:bg-white/10 w-[300px] h-[350px]  rounded-md flex flex-col justify-center items-center gap-4 pt-10"
    >
      <h1 className="px-4 leading-8 font-montserrat text-center text-lg font-medium text-white">
        {title}
      </h1>
      <p className="font-poppins text-base text-medium text-white">
        {instructor}
      </p>
      <p className="font-poppins text-sm text-medium text-stone-400">
        {completionDate}
      </p>
      <p className="font-poppins text-sm text-medium text-stone-400">
        {platform}
      </p>
      <button
        onClick={handleClick}
        className="font-poppins text-sm text-medium text-blue-400 underline"
      >
        {link}
      </button>
    </div>
  );
}
