import check from "../../Assets/images/RequestAccess/logo/check.png";
import { Info, LogoIcons } from "../../files/data";

import Image from "next/image";

export const Help = () => {
  return (
    <div className="bg-green-800 h-screen flex items-center">
      <div className="space-y-5 py-10 px-7 text-white text-xs ">
        <h1 className="font-semibold text-lg">Discover how we can help you</h1>
        <p>We&apos;ve tested over 100+ applications and we can help you:</p>
        <div className="space-y-5">
          {Info.map((ele, index) => {
            const { help } = ele;
            return (
              <div key={index}>
                <div className="flex space-x-3">
                  <div>
                    <Image src={check} alt="info" />
                  </div>
                  <div>
                    <p>{help}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-white border-t-2 py-5 space-y-5 ">
          <div>
            <p>Trusted by amazing development teams in the world</p>
          </div>
          <div className="flex justify-evenly items-center">
            {LogoIcons.map((logo, index) => {
              return (
                <div key={index}>
                  <Image src={logo} alt="company" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
