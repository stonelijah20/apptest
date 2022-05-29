type Props = {
  children: React.ReactNode;
};

export const WhiteButton = ({ children }: Props) => {
  return (
    <>
      <div>
        <button className="bg-slate-200 text-black font-semibold p-3 px-5 rounded">
          {children}
        </button>
      </div>
    </>
  );
};
