import { FormLayout } from "../components/FormLayout";
import { FullForm } from "../components/RequestAccess/FullForm";
import { Help } from "../components/RequestAccess/Help";

const RequestQuote = () => {
  return (
    <>
      <div className="flex ">
        <div className="hidden md:block">
          <Help />
        </div>
        <div>
          <FormLayout>
            <FullForm />
          </FormLayout>
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
