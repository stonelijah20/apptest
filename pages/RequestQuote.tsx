import { FormLayout } from "../components/FormLayout";
import { FullForm } from "../components/RequestAccess/FullForm";
import { Help } from "../components/RequestAccess/Help";

const RequestQuote = () => {
  return (
    <>
      <div>
        <div className="hidden">
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
