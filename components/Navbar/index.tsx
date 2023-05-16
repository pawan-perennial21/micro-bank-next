import { Avatar, Col, Layout, Row } from 'antd';
import { Typography } from 'antd';
const { Header } = Layout;

const { Title } = Typography;
import { CaretDownFilled } from '@ant-design/icons';
import React from 'react';
import styles from '../../styles/navbar.module.css';
export default function Navbar() {
  return (
    <Header className={styles.header_wrapper}>
      <Col className={styles.project_title} span={12}>
        <Title className={styles.text_title}> Micro Bank</Title>
        <Title className={styles.text_title}>ABC Pvt. Ltd.</Title>
      </Col>
      <Col className={styles.project_avatar} span={12}>
        <Col span={8} className={styles.avatar_wrapper}>
          <Avatar
            style={{ backgroundColor: 'red', verticalAlign: 'middle' }}
            size="large"
          >
            PT
          </Avatar>
          <CaretDownFilled size={50} />
        </Col>
      </Col>
    </Header>
  );
}
