/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, Col, Rate, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import styles from '../../styles/card.module.css';
import Image from 'next/image';
export default function ServiceCard({ icon, title1, rating }: any) {
  return (
    <Col
      md={12}
      xl={4}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        margin: '10px 0',
      }}
    >
      <Image src={icon} width={42.5} height={52.5} alt="icon" />
      <Typography.Text
        style={{ fontSize: '18px', fontWeight: '400', color: '#1a1a1a' }}
      >
        {title1}
      </Typography.Text>
      {rating && (
        <Rate
          defaultValue={2}
          character={
            <StarFilled style={{ color: '#0A8B1F', fontSize: '16px' }} />
          }
        />
      )}
    </Col>
  );
}
