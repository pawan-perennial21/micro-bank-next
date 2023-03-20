import { Button, Card, Col, Typography, Table, Tag } from 'antd';
import Image from 'next/image';
import Eye from '../../assets/icons/eye.svg';
import Download from '../../assets/icons/download.svg';
import React from 'react';
import styles from '../../styles/table.module.css';
export default function DetailsTransaction() {
  const transactions = [
    {
      transactionId: '2011002039111',
      date: '2022-01-01',
      amount: 100,
      status: 'pending',
      action: 'view',
    },
    {
      transactionId: 2011002039112,
      date: '2022-01-02',
      amount: 50,
      status: 'completed',
      action: 'view',
    },
    {
      transactionId: 2011002039113,
      date: '2022-01-03',
      amount: 75,
      status: 'pending',
      action: 'view',
    },
    {
      transactionId: 2011002039114,
      date: '2022-01-04',
      amount: 200,
      status: 'cancelled',
      action: 'view',
    },
    {
      transactionId: 2011002039115,
      date: '2022-01-04',
      amount: 200,
      status: 'cancelled',
      action: 'view',
    },
  ];

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
          dataSource={transactions}
          pagination={false}
          columns={columns}
        />
      </Col>
    </Card>
  );
}
