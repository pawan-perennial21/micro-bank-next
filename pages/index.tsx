import { Layout } from 'antd';
const { Content } = Layout;
import type { NextPage } from 'next';
import { CustomCardWithTabs } from '../components/card/card';

import Navbar from '../components/navbar';

import ServiceCardWrapper from '../components/serviceCard/serviceCardWrapper';

import homeIcon from '../assets/icons/account.svg';
import payrollIcon from '../assets/icons/payroll.svg';
import paymentIcon from '../assets/icons/payments.svg';
import Footer from '../components/footer';

const Home: NextPage = () => {
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
          <CustomCardWithTabs />
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

export default Home;
