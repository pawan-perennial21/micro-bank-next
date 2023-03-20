import React from 'react';
import { Card, Col, Rate, Typography } from 'antd';
// import { StarOutlined } from '@ant-design/icons';
import ServiceCard from '.';

import styles from '../../styles/card.module.css';
export default function ServiceCardWrapper({ title, data }: any) {
  return (
    <Card
      style={{
        background: '#ffffff',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.40)',
        margin: '20px 0',
      }}
    >
      <Typography.Text className={styles.summary_card_title}>
        {title}
      </Typography.Text>
      <Col sm={4} xl={24} style={{ display: 'flex', width: '100%' }}>
        {data &&
          data.map((el: { title1: any }) => (
            <ServiceCard key={el.title1} {...el} />
          ))}
      </Col>
    </Card>
  );
}
