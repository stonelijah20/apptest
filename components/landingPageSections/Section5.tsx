import Image from "next/image";
import { ContactInfo } from "../../files/data";
import { Socials } from "../Socials";

export const Section5 = () => {
  return (
    <>
      <div className="bg-gray-50 px-10 pb-10">
        <div className="md:flex md:space-x-5 md: py-2 justify-center">
          {ContactInfo.map((contacts, index) => {
            const { img, contact } = contacts;
            return (
              <div key={index}>
                <div className="py-3">
                  <div className="flex items-center">
                    <div className="mr-6 md:mr-2 bg-slate-100 w-16 h-16 md:w-8 md:h-8 grid place-content-center rounded ">
                      <Image src={img} alt="contact" />
                    </div>
                    <p className="text-sm md:text-base">{contact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Socials />
        </div>
      </div>
    </>
  );
};
