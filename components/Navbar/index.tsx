import {
  Avatar,
  Col,
  Dropdown,
  Layout,
  Typography,
  Row,
  Space,
  Divider,
} from 'antd';

const { Header } = Layout;

import { CaretDownFilled } from '@ant-design/icons';
import React from 'react';
import styles from '../../styles/navbar.module.css';
export default function Navbar() {
  const items: any = [
    {
      label: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D90429',
              fontSize: '20px',
              verticalAlign: 'middle',
              width: '80px',
              height: '80px',
            }}
          >
            PT
          </Avatar>
        </div>
      ),
      key: '0',
    },
    {
      label: 'Pawan Patidar',
      render: () => {
        return <a href="">pawan patidar</a>;
      },
      key: '1',
    },
    {
      label: (
        <Typography.Text
          style={{ color: '#D90429', borderBottom: '1px solid #D90429' }}
        >
          pramod.talwalkar@abc.com
        </Typography.Text>
      ),

      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: 'Edit Profile',
      key: '4',
    },
    {
      type: 'divider',
    },
    {
      label: 'Settings',
      key: '3',
    },

    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '5',
    },
  ];
  return (
    <Header className={styles.header_wrapper}>
      <Col className={styles.project_title} span={12}>
        <Typography.Text
          className={`${styles.logo_title} ${styles.logo_title_modify}`}
        >
          Micro
        </Typography.Text>
        <Typography.Text className={styles.logo_title}>Bank</Typography.Text>
        <Divider
          plain={false}
          className={styles.divider_modify}
          type="vertical"
        />
        <Typography.Text className={styles.text_title}>
          ABC Pvt. Ltd.
        </Typography.Text>
      </Col>
      <Col className={styles.project_avatar} span={12}>
        <Dropdown
          overlayStyle={{ width: '321px', height: '368px' }}
          menu={{ items }}
          trigger={['click']}
        >
          <Space>
            <Avatar
              style={{ backgroundColor: '#D90429', verticalAlign: 'middle' }}
              size="large"
            >
              PT
            </Avatar>
            <CaretDownFilled size={50} />
          </Space>
        </Dropdown>
      </Col>
    </Header>
  );
}
