type Props = {
  children: React.ReactNode;
};

export const Buttons = ({ children }: Props) => {
  return (
    <>
      <div>
        <button className="bg-green-800 text-white font-semibold p-3 px-7 rounded">
          {children}
        </button>
      </div>
    </>
  );
};
