import { Card, Col, Typography, Table } from 'antd';
import Image from 'next/image';
import Eye from '../../assets/icons/eye.svg';
import Download from '../../assets/icons/download.svg';
import React from 'react';
import styles from '../../styles/table.module.css';
export default function DetailsTransaction({ transactionData }: any) {
  const columns = [
    {
      dataIndex: 'transactionId',
      title: 'Transaction ID',
      key: 'transaction id',
    },
    {
      dataIndex: 'date',
      title: 'Date',
      key: 'date',
    },
    {
      dataIndex: 'amount',
      title: 'Amount',
      key: 'amount',
    },
    {
      dataIndex: 'status',
      title: 'Status',
      key: 'status',
      render: (val: any) =>
        val ? (
          <Typography.Text style={{ color: '#008000' }}>
            Approved
          </Typography.Text>
        ) : (
          <Typography.Text style={{ color: '#FF0000' }}>Reject</Typography.Text>
        ),
    },
    {
      dataIndex: 'action',
      title: 'Action',
      key: 'action',
      render: () => {
        return (
          <>
            <Image src={Eye} alt="Eye" />
            <Image src={Download} alt="Download" />
          </>
        );
      },
    },
  ];
  return (
    <Card>
      <Col span={24}>
        <Table
          className={styles.table_wrapper}
          dataSource={transactionData}
          pagination={false}
          columns={columns}
        />
      </Col>
    </Card>
  );
}
