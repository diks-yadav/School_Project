import React from "react";
import Leftnav from "../Leftnav";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  alert("please enter all required fields")
};

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post("http://localhost:9090/login",{email:values.username, password:values.password}).then((res)=>{
      console.log('Backend response Success:', res);
      if(res.data.status==1){
        alert(`${res.data.message}`)
        navigate("/dashboard");
      }
      else{
          alert(`${res.data.message}`)
      }
    }).catch((err) => {
      console.log('Backend response failes:', err.message);
    });
  };
  return (
    <div className="m-5">
        <h1 className="justify text-center">Login </h1>
    <center>
    <div className="mt-5">
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
      style={{fontWeight:"30px"}}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
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
    </center>
    </div>
  );
}
