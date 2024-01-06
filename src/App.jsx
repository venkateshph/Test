import React, { useEffect, useState } from "react";
import "./fotter.css";
import { Button, Typography, Form, Input, Space } from "antd";
import read from "./login";
const { Title } = Typography;

import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  //console.log("Failed:", errorInfo);
  alert("Enter username or password");
};

const App = () => {
  const navigation = useNavigate();
  const [data,setdata] = useState(false);
  const onFinish = (values) => {
    //console.log("Success:", values);
    read(values.username, values.password);
    setdata(true)
    navigation("/Homepage", {state :{data}})
  
  };
  return (
    <>
      <div class="postion-relative">
        <div class="position-absolute top-50 start-50 translate-middle">
          <Title level={3} class="text-center">
            Login
          </Title>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default App;
