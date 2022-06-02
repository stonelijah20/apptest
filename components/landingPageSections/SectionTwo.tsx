import Image from "next/image";
import allea from "../../Assets/images/TrustedByIcons/allea.png";
import bleyt from "../../Assets/images/TrustedByIcons/bleyt.png";
import inlaks from "../../Assets/images/TrustedByIcons/inlaks.png";
import providusbank from "../../Assets/images/TrustedByIcons/providusbank.png";

export const SectionTwo = () => {
  return (
    <>
      <div className="bg-slate-50 px-10 py-5">
        <h2 className="font-semibold flex justify-center mb-7">Trusted by:</h2>
        <div className="grid grid-cols-2 gap-3 gap-y-5 place-items-center md:flex justify-center md:space-x-16">
          <div>
            <Image src={allea} alt="allea" />
          </div>
          <div>
            <Image src={bleyt} alt="bleyt" />
          </div>
          <div>
            <Image src={inlaks} alt="inlaks" />
          </div>
          <div>
            <Image src={providusbank} alt="providusbank" />
          </div>
        </div>
      </div>
    </>
  );
};
