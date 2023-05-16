import React from 'react';
import Layout from '../layout/layout';
import { Button, Form, Input } from 'antd';
import styles from '../styles/layout.module.css';
import { useRouter } from 'next/router';
import { IUserCredential } from '../types';
import { validateEmailOrPhone } from '../constants/validation';

export default function Login() {
  const location = useRouter();

  const onFinish = async (values: IUserCredential) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <p className={styles.title}>Login</p>
      <p className={styles.sub_title}>Please login to your account</p>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          className={styles.label}
          name={['user', 'email']}
          label="Email or Phone"
          rules={[
            {
              required: true,
              message: 'Please enter your email or phone number',
            },
            { validator: validateEmailOrPhone },
          ]}
        >
          <Input className={styles.input} />
        </Form.Item>
        <Form.Item
          className={styles.label}
          name={['user', 'password']}
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
            // { validator: validatorPassword },
          ]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>
        <Form.Item className={styles.login_form_forgot}>
          <a href="">Forgot password</a>
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} block htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <p>
          Dont have an account?
          <span
            className={styles.login_span}
            onClick={() => {
              location.push('/register');
            }}
          >
            Create an Account
          </span>
        </p>
      </Form>
    </Layout>
  );
}
