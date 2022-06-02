import Image from "next/image";
import headerIcon from "../Assets/images/Header/logo.png";
import { Buttons } from "./Buttons";

export const Header = () => {
  return (
    <>
      <div className="shadow-xl">
        <div className="flex justify-between py-3 px-3 md:mx-10 py-2">
          <div>
            <Image src={headerIcon} alt="App_Test icon" />
          </div>
          <div>
            <Buttons>Login</Buttons>
          </div>
        </div>
      </div>
    </>
  );
};
