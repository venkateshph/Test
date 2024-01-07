import React, { useEffect, useState } from "react";
import "./fotter.css";
import { Button, Typography, Form, Input, Skeleton } from "antd";

const { Title } = Typography;


import supabase  from "./login";



const onFinishFailed = (errorInfo) => {
  
  alert("Enter username or password");
};

const App = () => {

  async function va(username,password){

    //console.log("Loading")
    let {data:username_data,err} =  await supabase.from('Data').select('*')
    //console.log("Done")
    if(username_data[0].Username == username && password == username_data[0].Password){
      
      console.log("correct")
      
    }else{
      console.log("wrong");
    }
  }

  const onFinish = (values) => {
    //console.log("Success:", values.username);
    va(values.username,values.password)
    
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
