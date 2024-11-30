import {
  Input,
  theme,
  Button,
  Divider,
  Popover,
  Dropdown,
  ConfigProvider,
} from "antd";
import {
  CrownFilled,
  SmileFilled,
  ChromeFilled,
  GithubFilled,
  TabletFilled,
  LogoutOutlined,
  SearchOutlined,
  CaretDownFilled,
  PlusCircleFilled,
  InfoCircleFilled,
  DoubleRightOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { css } from "@emotion/css";
import {
  ProCard,
  ProLayout,
  PageContainer,
  SettingDrawer,
  ProConfigProvider,
} from "@ant-design/pro-components";
import React, { useState } from "react";
import type { ProSettings } from "@ant-design/pro-components";

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();

  return (
    <div
      className={css`
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: "33.33%",
        fontSize: "14px",
        cursor: "pointer",
        lineHeight: "22px",
        marginBottom: "8px",
        color: token.colorTextSecondary,
      }}
    >
      {props.children}
      <DoubleRightOutlined style={{ marginInlineStart: 4 }} />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props
) => {
  const { token } = theme.useToken();

  return (
    <div style={{ width: "100%", ...props.style }}>
      <div
        style={{
          fontSize: 16,
          fontWeight: 500,
          marginBlockEnd: 16,
          lineHeight: "24px",
          color: token.colorTextHeading,
        }}
      >
        {props.title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {new Array(6).fill(1).map((_, index) => (
          <Item key={index}>具体的解决方案-{index}</Item>
        ))}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Divider type="vertical" style={{ height: "1.5em" }} />
      <Popover
        placement="bottom"
        overlayStyle={{
          paddingTop: 8,
          height: "307px",
          padding: "24px",
          borderRadius: "0 0 6px 6px",
          width: "calc(100vw - 24px)",
        }}
        content={
          <div style={{ display: "flex", padding: "32px 40px" }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List title="其他解决方案" style={{ marginBlockStart: 32 }} />
            </div>
            <div
              style={{
                width: "308px",
                paddingInlineStart: 16,
                borderInlineStart: "1px solid " + token.colorBorder,
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: token.colorText,
                }}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((_name, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      padding: "16px",
                      marginTop: "4px",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    className={css`
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img
                      alt=""
                      src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg"
                    />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: token.colorText,
                        }}
                      >
                        Ant Design
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: "20px",
                          color: token.colorTextSecondary,
                        }}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            gap: 4,
            display: "flex",
            fontWeight: 500,
            cursor: "pointer",
            alignItems: "center",
            paddingInlineEnd: 12,
            paddingInlineStart: 8,
            color: token.colorTextHeading,
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();

  return (
    <div
      aria-hidden
      key="SearchOutlined"
      style={{
        display: "flex",
        marginInlineEnd: 24,
        alignItems: "center",
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        variant="borderless"
        placeholder="搜索方案"
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={<SearchOutlined style={{ color: token.colorTextLightSolid }} />}
      />
      <PlusCircleFilled style={{ fontSize: 24, color: token.colorPrimary }} />
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [num, setNum] = useState(40);
  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: "mix",
    splitMenus: true,
    fixSiderbar: true,
  });

  if (typeof document === "undefined") return <div />;

  return (
    <div id="test-pro-layout" style={{ height: "100vh", overflow: "auto" }}>
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById("test-pro-layout") || document.body;
          }}
        >
          <ProLayout
            {...settings}
            prefixCls="my-prefix"
            siderMenuType="group"
            location={{ pathname }}
            menu={{ collapsedShowGroupTitle: true }}
            onMenuHeaderClick={(e) => console.log(e)}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <div>
                  {logo}
                  {title}
                </div>
              );

              if (typeof window === "undefined") return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;

              return (
                <>
                  {defaultDom}
                  <MenuCard />
                </>
              );
            }}
            menuItemRender={(item, dom) => (
              <div onClick={() => setPathname(item.path || "/welcome")}>
                {dom}
              </div>
            )}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;

              return (
                <div style={{ textAlign: "center", paddingBlockStart: 12 }}>
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            token={{ header: { colorBgMenuItemSelected: "rgba(0,0,0,0.04)" } }}
            actionsRender={(props) => {
              if (props.isMobile) return [];

              if (typeof window === "undefined") return [];

              return [
                props.layout !== "side" && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />,
              ];
            }}
            route={{
              routes: [
                {
                  name: "欢迎",
                  path: "/welcome",
                  icon: <SmileFilled />,
                  component: "./Welcome",
                },
                {
                  name: "管理页",
                  path: "/admin",
                  access: "canAdmin",
                  component: "./Admin",
                  icon: <CrownFilled />,
                  routes: [
                    {
                      name: "二级页面",
                      icon: <CrownFilled />,
                      component: "./Welcome",
                      path: "/admin/sub-page2",
                    },
                    {
                      name: "三级页面",
                      icon: <CrownFilled />,
                      component: "./Welcome",
                      path: "/admin/sub-page3",
                    },
                    {
                      name: "一级页面",
                      component: "./Welcome",
                      path: "/admin/sub-page1",
                      icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
                    },
                  ],
                },
                {
                  name: "列表页",
                  path: "/list",
                  icon: <TabletFilled />,
                  component: "./ListTableList",
                  routes: [
                    {
                      name: "列表页面",
                      icon: <CrownFilled />,
                      path: "/list/sub-page",
                      routes: [
                        {
                          name: "一一级列表页面",
                          icon: <CrownFilled />,
                          path: "sub-sub-page1",
                          component: "./Welcome",
                        },
                        {
                          name: "一二级列表页面",
                          icon: <CrownFilled />,
                          path: "sub-sub-page2",
                          component: "./Welcome",
                        },
                        {
                          name: "一三级列表页面",
                          icon: <CrownFilled />,
                          path: "sub-sub-page3",
                          component: "./Welcome",
                        },
                      ],
                    },
                    {
                      name: "二级列表页面",
                      icon: <CrownFilled />,
                      component: "./Welcome",
                      path: "/list/sub-page2",
                    },
                    {
                      name: "三级列表页面",
                      icon: <CrownFilled />,
                      component: "./Welcome",
                      path: "/list/sub-page3",
                    },
                  ],
                },
                {
                  icon: <ChromeFilled />,
                  path: "https://ant.design",
                  name: "Ant Design 官网外链",
                },
              ],
            }}
            avatarProps={{
              size: "small",
              title: "七妮妮",
              render: (_props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "logout",
                          label: "退出登录",
                          icon: <LogoutOutlined />,
                          onClick: () => {
                            window.location.href = "/";
                            localStorage.removeItem("accessToken");
                          },
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
              src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
            }}
            bgLayoutImgList={[
              {
                right: -45,
                bottom: -68,
                height: "303px",
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
              },
              {
                left: 0,
                bottom: 0,
                width: "331px",
                src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
              },
              {
                left: 85,
                bottom: 100,
                height: "303px",
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
              },
            ]}
            appList={[
              {
                title: "AntV",
                target: "_blank",
                url: "https://antv.vision/",
                desc: "蚂蚁集团全新一代数据可视化解决方案",
                icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
              },
              {
                title: "语雀",
                desc: "知识创作与分享工具",
                url: "https://www.yuque.com/",
                icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
              },
              {
                title: "Ant Design",
                url: "https://ant.design",
                desc: "杭州市较知名的 UI 设计语言",
                icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
              },
              {
                title: "Kitchen ",
                desc: "Sketch 工具集",
                url: "https://kitchen.alipay.com/",
                icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
              },
              {
                title: "umi",
                desc: "插件化的企业级前端应用框架。",
                url: "https://umijs.org/zh-CN/docs",
                icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
              },
              {
                desc: "专业级 UI 组件库",
                title: "Pro Components",
                url: "https://procomponents.ant.design/",
                icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
              },
              {
                title: "dumi",
                desc: "为组件开发场景而生的文档工具",
                url: "https://d.umijs.org/zh-CN",
                icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
              },
              {
                title: "qiankun",
                url: "https://qiankun.umijs.org/",
                desc: "可能是你见过最完善的微前端解决方案🧐",
                icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
              },
            ]}
          >
            <PageContainer
              subTitle="简单的描述"
              footer={[
                <Button key="3">重置</Button>,
                <Button key="2" type="primary">
                  提交
                </Button>,
              ]}
              extra={[
                <Button key="3">操作</Button>,
                <Button key="2">操作</Button>,
                <Button
                  key="1"
                  type="primary"
                  onClick={() => setNum(num > 0 ? 0 : 40)}
                >
                  主操作
                </Button>,
              ]}
              token={{ paddingInlinePageContainerContent: num }}
            >
              <ProCard style={{ minHeight: 800, height: "200vh" }}>
                {children}
              </ProCard>
            </PageContainer>
            <SettingDrawer
              enableDarkTheme
              pathname={pathname}
              settings={settings}
              disableUrlParams={false}
              getContainer={(e: any) => {
                if (typeof window === "undefined") return e;

                return document.getElementById("test-pro-layout");
              }}
              onSettingChange={(changeSetting) => setSetting(changeSetting)}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default Layout;
