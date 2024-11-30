import { useEffect, useContext } from "react";

import "./index.scss";
import { AppContext } from "../../contexts";
import { ACCOUNT_ACTION } from "../../contexts/account";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { accountDispatch } = useContext(AppContext);

  useEffect(() => {
    const profile = { id: "123", name: "Nguyễn Văn A", email: "anv@gmail.com" };

    accountDispatch({ payload: profile, type: ACCOUNT_ACTION.UPDATE });
  }, [accountDispatch]);

  return <div className="layout-container"> {children}</div>;
};

export default Layout;
