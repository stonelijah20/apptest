type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="px-10 md:px-16">{children}</div>
    </>
  );
};
