type Props = {
  children: React.ReactNode;
};

export const WhiteButton = ({ children }: Props) => {
  return (
    <>
      <div>
        <button
          className="bg-slate-200 text-black font-semibold p-3 px-5 rounded 
        hover:bg-slate-100 border-white border-2 hover:border-slate-200 ease-in duration-300"
        >
          {children}
        </button>
      </div>
    </>
  );
};
