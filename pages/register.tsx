import React from 'react';
import Layout from '../layout/layout';
import styles from '../styles/layout.module.css';
import { Button, DatePicker, Form, Input } from 'antd';
import { useRouter } from 'next/router';
export default function Registration() {
  const location = useRouter();
  console.log('location', location);
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const valuesAll = {
      ...values.user,
      dateOfIn: values['dateOfIn'].format('YYYY-MM-DD'),
    };

    console.log('valuesAll', valuesAll);
  };
  const config = {
    rules: [
      {
        type: 'object' as const,
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <p className={styles.title_register}>Create an Account</p>
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
          name={['user', 'fullName']}
          label="Full Name"
          rules={[
            {
              required: true,
              message: 'Please enter your full name',
            },
          ]}
        >
          <Input className={styles.input} />
        </Form.Item>
        <Form.Item name="dateOfIn" label="Date of Incorporation" {...config}>
          <DatePicker className={styles.input} />
        </Form.Item>
        <Form.Item
          className={styles.label}
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
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
          ]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>
        <Form.Item
          className={styles.label}
          name={['user', 'confirmPassword']}
          label="Confirm Password"
          dependencies={['user', 'password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue(['user', 'password']) === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} block htmlType="submit">
            Create an Account
          </Button>
        </Form.Item>
        <p>
          Already have an account?
          <span
            className={styles.login_span}
            onClick={() => {
              location.push('/login');
            }}
          >
            Login
          </span>
        </p>
      </Form>
    </Layout>
  );
}
