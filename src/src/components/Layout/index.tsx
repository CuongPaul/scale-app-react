import {
  UserOutlined,
  FileTextFilled,
  LogoutOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { ProLayout } from "@ant-design/pro-components";
import { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../../contexts";
import { signOut } from "../../services/auth";
import { ACCOUNT_ACTION } from "../../contexts/account";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accountState, accountDispatch } = useContext(AppContext);

  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    const account = {
      id: "annv",
      name: "Nguyen Van An",
      email: "annv@gmail.com",
      avatar:
        "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    };

    accountDispatch({ payload: account, type: ACCOUNT_ACTION.UPDATE });
  }, [accountDispatch]);

  return (
    <div className="layout-container">
      <ProLayout
        layout="mix"
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
        logo={`${window.location.origin}/images/ebook-icon.png`}
        route={{
          routes: [
            {
              name: "Home",
              path: "/home",
              icon: <DashboardOutlined />,
            },
            {
              name: "Product manager",
              path: "/product-manager",
              icon: <FileTextFilled />,
              routes: [
                { name: "Product", path: "/product" },
                { name: "Category", path: "/category" },
              ],
            },
          ],
        }}
        avatarProps={{
          src: accountState.avatar,
          title: accountState.name,
          render: (_props: any, dom: any) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "account",
                      icon: <UserOutlined />,
                      label: <Link to="/account/overview">Account</Link>,
                    },
                    {
                      type: "divider",
                    },
                    {
                      danger: true,
                      key: "sign-out",
                      onClick: signOut,
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
        bgLayoutImgList={[
          {
            left: 0,
            bottom: 0,
            width: "331px",
            src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
          },
        ]}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Layout;
