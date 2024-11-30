import { useRef, useEffect, useContext } from "react";

import "./index.scss";
import { AppContext } from "../../contexts";
import { ACCOUNT_ACTION } from "../../contexts/account";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const appRef = useRef<HTMLDivElement>(null);
  const { accountDispatch } = useContext(AppContext);

  useEffect(() => {
    if (appRef.current) {
      const widthbyDesign = 1920;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthbyDesign) / 10;

      appRef.current.style.setProperty("--proportion", `${proportion}`);
    }
  }, []);

  useEffect(() => {
    const account = { id: "123", name: "Nguyễn Văn A", email: "anv@gmail.com" };

    accountDispatch({ payload: account, type: ACCOUNT_ACTION.UPDATE });
  }, [accountDispatch]);

  return (
    <div ref={appRef} className="layout-container">
      {children}
    </div>
  );
};

export default Layout;
