import { useContext } from "react";

import "./index.scss";
import { AppContext } from "../../contexts";

const Header = () => {
  const { accountState } = useContext(AppContext);

  console.log(accountState);

  return (
    <div className="header-container">
      <img alt="" src="/images/appota-logo.png" />
      <div className="header-button">
        <span>Đăng nhập</span>
      </div>
    </div>
  );
};

export default Header;
