import React from "react";
import { Form, Input, Checkbox, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";

interface iLogin {
  auth: boolean;
}
const Login: React.FC<iLogin> = ({ auth }) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  if (auth) {
    return <Navigate to={"/"} />;
  }
  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <Col>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>
          </Form.Item>
          Or <a href="">register now!</a>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
