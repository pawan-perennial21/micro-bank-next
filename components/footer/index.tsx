import React from 'react';
import { Typography } from 'antd';
export default function Footer() {
  return (
    <Typography.Text
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      © 2021 Micro Bank
    </Typography.Text>
  );
}
