import {
  UserOutlined,
  FileTextFilled,
  LogoutOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Modal, Dropdown } from "antd";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ProLayout, DefaultFooter } from "@ant-design/pro-components";

import "./index.scss";
import { AppContext } from "../../contexts";
import { signOut } from "../../services/auth";
import { ACCOUNT_ACTION } from "../../contexts/account";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accountState, accountDispatch } = useContext(AppContext);

  const [pathname, setPathname] = useState(location.pathname);

  const confirm = () => {
    Modal.confirm({
      centered: true,
      okType: "danger",
      title: "Sign out",
      content: "Are you want sign out?",
      onOk: () => signOut().then(() => navigate("/")),
    });
  };

  useEffect(() => {
    const account = {
      id: "anv",
      name: "Nguyen Van An",
      email: "anv@gmail.com",
      avatar:
        "https://mega.com.vn/media/news/2037_hinh_nen_thien_nhien_4k__28_.jpg",
    };

    accountDispatch({ payload: account, type: ACCOUNT_ACTION.UPDATE });
  }, [accountDispatch]);

  return (
    <div className="layout-container">
      <ProLayout
        title="Ebook"
        location={{ pathname }}
        style={{ minHeight: "100vh" }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              navigate(item.path ?? "");
              setPathname(item.path ?? "");
            }}
          >
            {dom}
          </div>
        )}
        logo={`${window.location.origin}/logo.svg`}
        route={{
          routes: [
            {
              name: "Home",
              path: "/home",
              icon: <DashboardOutlined />,
            },
            {
              name: "Post manager",
              path: "/post-manager",
              icon: <FileTextFilled />,
              routes: [
                { name: "Post", path: "/post" },
                { name: "Category", path: "/category" },
              ],
            },
          ],
        }}
        footerRender={() => <DefaultFooter copyright="Ebook" />}
        avatarProps={{
          title: accountState.name,
          src: `${process.env.REACT_APP_FILE_BASE_URL}/${accountState.avatar}`,
          render: (_: any, dom: any) => {
            return (
              <Dropdown
                className="layout__account"
                menu={{
                  items: [
                    {
                      key: "account",
                      icon: <UserOutlined />,
                      label: <Link to="/account/overview">Profile</Link>,
                    },
                    {
                      type: "divider",
                    },
                    {
                      danger: true,
                      key: "sign-out",
                      onClick: confirm,
                      label: "Sign out",
                      icon: <LogoutOutlined />,
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default Layout;
