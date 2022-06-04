// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Socials = () => {
  return (
    <>
      <div>
        <div className="flex justify-center space-x-10 p-5">
          <FaTwitter />
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};
