import { FooterLinks } from "../files/data";

export const Footer = () => {
  return (
    <>
      <div className="capitalize text-center py-5 bg-slate-100 px-10">
        <p>&copy; 2022 Appstest</p>
        <div>
          <ul className="flex space-x-3 justify-center mt-2">
            {FooterLinks.map((items, index) => {
              return (
                <div key={index} className="border-l first:border-0">
                  <li className="pl-2 underline text-xs sm:text-sm">{items}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
