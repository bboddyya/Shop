import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  ShoppingOutlined,
  HeartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;

const items = [
  { key: 1, icon: <HomeOutlined />, label: "Домой" },
  { key: 2, icon: <ShoppingOutlined />, label: "Корзина" },
  { key: 3, icon: <HeartOutlined />, label: "Избранное" },
  { key: 4, icon: <UserOutlined />, label: "Профиль" },
];

interface iLayout {
  children: React.ReactNode;
}
const LayoutComponent: React.FC<iLayout> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsed={collapsed} collapsible theme="light" trigger={null}>
        <div className="logo" style={{ width: "20px", height: "60px" }} />
        <Menu mode="inline" theme="light" items={items} />
      </Sider>
      <Layout>
        <Header>
          {collapsed ? (
            <MenuUnfoldOutlined
              onClick={() => setCollapsed(!collapsed)}
              style={{ color: "white" }}
              className="trigger"
            />
          ) : (
            <MenuFoldOutlined
              onClick={() => setCollapsed(!collapsed)}
              style={{ color: "white" }}
              className="trigger"
            />
          )}
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
