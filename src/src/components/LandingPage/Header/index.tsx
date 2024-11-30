import { useNavigate } from "react-router-dom";

import "./index.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/home");
    localStorage.setItem("accessToken", "abc123");
  };

  return (
    <div className="header-container">
      <img alt="" src="/images/appota-logo.png" />
      <div className="header-button" onClick={handleClickSignIn}>
        <span>Đăng nhập</span>
      </div>
    </div>
  );
};

export default Header;
