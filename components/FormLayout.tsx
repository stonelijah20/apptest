import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import whiteHeader from "../Assets/images/RequestAccess/whiteHeader.png";
type Props = {
  children: React.ReactNode;
};

export const FormLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-green-800 h-screen md:bg-white">
        <div className="px-5 p-5 flex items-center w-9/12 space-x-20">
          <div className="flex items-center">
            <Link href={"/"}>
              <div className="text-white md:text-black">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </div>
            </Link>
          </div>
          <div className="flex justify-center md:hidden">
            <Image src={whiteHeader} alt="AppsTest" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
