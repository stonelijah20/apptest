import Image from "next/image";
import headerIcon from "../Assets/images/Header/logo.png";
import { Buttons } from "./Buttons";

export const Header = () => {
  return (
    <>
      <div className="shadow-xl sticky top-0 backdrop-opacity-10">
        <div className="flex justify-between py-3 px-3">
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
