import "./index.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="layout-container"> {children}</div>;
};

export default Layout;
