import emoji from "../../Assets/images/RequestAccess/logo/Emoji.png";

import { Buttons } from "../Buttons";

import Image from "next/image";
import { FaEnvelope, FaUser } from "react-icons/fa";

export const FullForm = () => {
  return (
    <>
      <div className="">
        <div className="bg-white px-10 mx-5 rounded">
          <form className="py-10 md:py-0 space-y-5">
            <div className="flex items-center justify-center font-bold text-base space-x-3 p-5">
              <div>
                <h1>Request Quote</h1>
              </div>
              <div>
                <Image src={emoji} alt="access" />
              </div>
            </div>
            <div className="md:flex md:space-x-5">
              <div className="flex flex-col space-y-3">
                <label className="text-slate-700">First Name</label>
                <div className="relative flex items-center">
                  <div className="absolute top-50 px-2 border-2 border-r-gray-400 ">
                    <FaUser color="gray" />
                  </div>
                  <input
                    className="bg-slate-200 rounded text-slate-600 text-xs p-3 w-full pl-10"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-slate-700">Last Name</label>
                <div className="relative flex items-center">
                  <div className="absolute top-50 px-2 border-2 border-r-gray-400 ">
                    <FaUser color="gray" />
                  </div>
                  <input
                    className="bg-slate-200 rounded text-slate-600 text-xs p-3 w-full pl-10"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-slate-700">Work Email</label>
              <div className="relative flex items-center">
                <div className="absolute top-50 px-2 border-2 border-r-gray-400 ">
                  <FaEnvelope color="gray" />
                </div>
                <input
                  className="bg-slate-200 rounded text-slate-600 text-xs p-3 w-full pl-10"
                  type="text"
                  placeholder="Enter your work email address"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-slate-700">Phone Number</label>
              <div className="relative flex items-center space-x-2">
                <input
                  className="bg-slate-200 rounded text-slate-600 text-xs p-3 w-1/5"
                  type="text"
                  placeholder="+234"
                />
                <input
                  className="bg-slate-200 rounded text-slate-600 text-xs p-3 w-full"
                  type="text"
                  placeholder="900000000"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Buttons>Request Quote</Buttons>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
