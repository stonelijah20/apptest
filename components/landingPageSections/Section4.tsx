import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { landingOnboardingInfo } from "../../files/data";

import mobile from "../../Assets/images/Section4/mobile.png";

export const Section4 = () => {
  useEffect(() => {
    let select = document.getElementById("select");
    let contents = select?.children[1].children[0].children[0];
    contents?.classList.add("flex-row-reverse", "md:flex-row");

    let img1 = document.getElementById("select");
    let img1cont = img1?.children[0].children[1];
    img1cont?.classList.add("md:relative", "pr-10", "pb-20");

    let display = document.getElementById("select");
    let displayDiv = display?.children[0].children[1].children[1];
    displayDiv?.classList.add("md:block");
  }, []);

  return (
    <>
      <div>
        <div className="py-12" id="select">
          {landingOnboardingInfo.map((infoContent, index) => {
            const { noImg, header, text, imag } = infoContent;
            return (
              <div
                key={index}
                className=" md:flex items-center md:justify-between even:flex-row-reverse mb-10 md:mb-20"
              >
                <div className="md:w-1/2 ">
                  <div className="flex items-center justify-start md:space-x-5 ">
                    <div className="mr-2 md:mr-0">
                      <Image src={noImg} alt="header" />
                    </div>
                    <div className="mr-5">
                      <h1 className="font-bold">{header}</h1>
                    </div>
                  </div>
                  <p>{text}</p>
                  <Link href={"../../RequestAccess"}>
                    <div
                      className="flex my-4 space-x-2 items-center text-green-800 underline 
                  font-semibold capitalize cursor-pointer"
                    >
                      <p>Request Access</p>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image height={370} width={500} src={imag} alt="Image" />
                  <div className="hidden absolute right-0 bottom-0 pl-10">
                    <Image src={mobile} alt="mobile" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
