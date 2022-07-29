import React from "react";
import HomeLayout from "../components/HomeLAyout";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import "antd/dist/antd.css";
import "./home.css";

const { Option } = Select;
const Home = () =>{
   return(
    <HomeLayout>

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <h1>CREATE AN ACCOUNT</h1>
      <Form.Item
        name="username"
        className="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
      className="username"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          
        />
      </Form.Item>
      <Form.Item 
      className="username"
        Choose Money="Money"
        rules={[{ required: true, message: 'Please select range of  Money ' }]}
      >
        <Select placeholder="Please select range of  Money">
          <Option value="male">1 - 10,000</Option>
          <Option value="female">10,000 - 100,000</Option>
          <Option value="other">100,000 - above</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        
    

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
     

    </HomeLayout>

    
   )
}

export default Home