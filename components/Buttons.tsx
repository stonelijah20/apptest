type Props = {
  children: React.ReactNode;
};

export const Buttons = ({ children }: Props) => {
  return (
    <>
      <div>
        <button
          className="bg-green-800 hover:bg-inherit text-white 
        hover:text-green-800 hover:border-green-800 border-white border-2 ease-in duration-300 
        font-semibold p-3 px-7 rounded"
        >
          {children}
        </button>
      </div>
    </>
  );
};
