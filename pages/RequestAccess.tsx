import { Buttons } from "../components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import whiteHeader from "../Assets/images/RequestAccess/whiteHeader.png";
import emoji from "../Assets/images/RequestAccess/Emoji.png";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { Help } from "../components/RequestAccess/Help";

const RequestAccess = () => {
  return (
    <>
      <div className="flex flex-row-reverse">
        <div className="w-full md:w-7/12">
          <div className="bg-green-800 pb-32 md:bg-white h-screen">
            <div className="px-5 p-5 flex items-center w-9/12 space-x-20">
              <div className="flex items-center">
                <Link href={"/"}>
                  <FontAwesomeIcon
                    color="white"
                    icon={faArrowLeft}
                  ></FontAwesomeIcon>
                </Link>
              </div>
              <div className="flex justify-center md:hidden">
                <Image src={whiteHeader} alt="AppsTest" />
              </div>
            </div>
            <div className="bg-white h-full px-10 mx-5 rounded">
              <form className="py-10 space-y-5">
                <div className="flex items-center justify-center font-bold text-base space-x-3 p-5">
                  <div>
                    <h1>Request Access</h1>
                  </div>
                  <div>
                    <Image src={emoji} alt="access" />
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
                <div className="space-x-3 flex items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="accent-black w-6 h-6 rounded"
                    />
                  </div>
                  <label className="text-xs text-slate-600">
                    I have read and I accept the{" "}
                    <span className="text-green-800 underline">
                      Terms of use
                    </span>
                  </label>
                </div>
                <div className="space-x-3 flex items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="accent-black w-6 h-6 rounded"
                    />
                  </div>
                  <label className="text-xs text-slate-600">
                    Send me occasional emails about Appstest &apos;s services
                    (unsubscribe at any time)
                  </label>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Buttons>Request Access</Buttons>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Help />
        </div>
      </div>
    </>
  );
};

export default RequestAccess;
