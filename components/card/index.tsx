import { Button } from 'antd';
import { useState } from 'react';

import styles from '../../styles/card.module.css';
import DetailsTransaction from '../detailsTransaction';
import SummaryCard from '../summaryCard';
export function CustomCardWithTabs({ transactionData }: any) {
  const [activeTab, setActiveTab] = useState('1');
  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };
  return (
    <>
      <div
        style={{
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '12px',
          marginBottom: '30px',
          height: '60px',
        }}
      >
        <Button
          type="text"
          onClick={() => handleTabChange('1')}
          className={
            activeTab === '1'
              ? `${styles.toggle_button} ${styles.slide_tab_red}  ${styles.slide_tab_red_one}`
              : `${styles.toggle_button} ${styles.slide_tab_red_one} ${styles.no_hover_effect} `
          }
        >
          Summary
        </Button>
        <Button
          type="text"
          className={
            activeTab === '2'
              ? `${styles.toggle_button} ${styles.slide_tab_red}`
              : `${styles.toggle_button} ${styles.no_hover_effect}`
          }
          onClick={() => handleTabChange('2')}
        >
          Details
        </Button>
      </div>
      {activeTab === '1' ? (
        <SummaryCard
          title="Summary"
          accountNumber="1234567890"
          income="$5000"
          spends="$3500"
        />
      ) : (
        ''
      )}
      {activeTab === '2' ? (
        <DetailsTransaction transactionData={transactionData} />
      ) : (
        ''
      )}
    </>
  );
}
