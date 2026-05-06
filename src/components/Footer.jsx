import React from "react";

const Footer = () => {
   return (
      <div className="relative py-8 overflow-hidden bg-white">
         <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-8">
               
               {/* Logo */}
               <div className="w-auto p-8">
                  <a href="#">
                     <div className="inline-flex items-center">
                        <span className="ml-4 text-lg font-bold">
                           Food <span className="text-yellow-500">Zone</span>
                        </span>
                     </div>
                  </a>
               </div>

               {/* Links */}
               <div className="w-auto p-8">
                  <ul className="flex flex-wrap items-center -m-5">
                     <li className="p-5">
                        <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                           Privacy Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                           Terms of Service
                        </a>
                     </li>
                     <li className="p-5">
                        <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                           Return Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                           Contact Us
                        </a>
                     </li>
                  </ul>
               </div>

               {/* ONLY LINKEDIN */}
               <div className="w-auto p-8">
                  <a
                     href="https://www.linkedin.com/in/tushar-soni-3775072b0"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:border-blue-500 transition">
                        <svg
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="#0A66C2"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.5 8H4.5V24H0.5V8ZM8.5 8H12.3V10.2H12.4C13 9 14.7 7.7 17 7.7C21 7.7 22 10.3 22 14.2V24H18V15.2C18 13.2 18 10.8 15.5 10.8C13 10.8 12.6 12.9 12.6 15V24H8.5V8Z"/>
                        </svg>
                     </div>
                  </a>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Footer;