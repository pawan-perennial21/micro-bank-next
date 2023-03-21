import { Layout } from 'antd';
const { Content } = Layout;
import type { NextPage } from 'next';
import { CustomCardWithTabs } from '../components/card';

import Navbar from '../components/navbar';

import ServiceCardWrapper from '../components/serviceCard/serviceCardWrapper';

import homeIcon from '../assets/icons/account.svg';
import payrollIcon from '../assets/icons/payroll.svg';
import paymentIcon from '../assets/icons/payments.svg';
import Footer from '../components/footer';

const Home: NextPage = ({ transactionData }: any) => {
  console.log('aggagaga', transactionData);
  const currentService = [
    {
      icon: homeIcon,
      title1: 'Current Account',
      rating: 4,
    },
    {
      icon: payrollIcon,
      title1: 'Payroll',
      rating: 4,
    },
    {
      icon: paymentIcon,
      title1: 'Payments',
      rating: 2,
    },
  ];
  const availableService = [
    {
      icon: homeIcon,
      title1: 'Wallet',
    },
    {
      icon: homeIcon,
      title1: 'Investments',
    },
    {
      icon: homeIcon,
      title1: 'Tax Payment',
    },
    {
      icon: homeIcon,
      title1: 'Loans',
    },
  ];
  return (
    <>
      <Navbar />
      <Layout style={{ background: '#E5E5E5' }}>
        <Content style={{ margin: '20px 24px' }}>
          <CustomCardWithTabs transactionData={transactionData} />
          <ServiceCardWrapper data={currentService} title="Current Services" />
          <ServiceCardWrapper
            data={availableService}
            title="Available Services"
          />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

// http://demo1681758.mockable.io/transaction

export async function getServerSideProps() {
  const res = await fetch(`http://demo1681758.mockable.io/transaction`);
  const transactionData = await res.json();
  return { props: { transactionData } };
}

export default Home;
