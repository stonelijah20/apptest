import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Buttons } from "../Buttons";
import { WhiteButton } from "../WhiteButton";

export const SectionOne = () => {
  return (
    <>
      <div className="flex justify-center text-center md:px-44">
        <div className="my-8">
          <h5 className="text-green-800 text-sm uppercase font-bold py-4">
            great software requires great testing
          </h5>
          <h1 className="text-black capitalize text-xl font-bold py-4 md:text-4xl py-6">
            find profit zapping bugs before your customers do!
          </h1>
          <p className="text-slate-700 text-base leading-2 py-4">
            As you are scaling and building fast it becomes super easy to
            overlook critical issues that may affect your bottom line. Apps test
            acts as a cover to ensure that you ship faster faster to the market
            while guaranteeing product quality that your developer or internal
            QA may overlook.
          </p>
          <div className="my-5 md:flex md:justify-center md:space-x-7">
            <div className="mb-6">
              <Buttons>
                <div className="flex space-x-2 items-center">
                  <p>Request Access</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Buttons>
            </div>
            <div>
              <WhiteButton>
                <div className="flex space-x-2 items-center">
                  <p>Request Quote</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
