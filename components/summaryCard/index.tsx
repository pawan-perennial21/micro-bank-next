import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
const { Title, Text } = Typography;
import styles from '../../styles/card.module.css';
const SummaryCard = ({ title, accountNumber, income, spends }: any) => {
  return (
    <Card className={styles.summary_card}>
      <Text className={styles.summary_card_title}>{title}</Text>
      <Row className={styles.summary_content}>
        <Col span={6}>
          <Space direction="vertical">
            <Text className={styles.summary_card_text}>Account Number</Text>
            <Text className={styles.summary_card_content}>{accountNumber}</Text>
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical">
            <Text className={styles.summary_card_text}>Income</Text>
            <Text className={styles.summary_card_content}>{income}</Text>
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical">
            <Text className={styles.summary_card_text}>Spends</Text>
            <Text className={styles.summary_card_content}>{spends}</Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default SummaryCard;
