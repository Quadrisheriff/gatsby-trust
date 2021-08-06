import * as React from "react";
import Hero from "../components/Businesspage/Hero";
import Layout from "../components/Layout";
import Escrow from "../components/Businesspage/Escrow";
import Transaction from "../components/Businesspage/Transaction";
import Bookkeeping from "../components/Businesspage/Bookkeeping";
import Customer from "../components/Businesspage/Customer";


const BusinessPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Escrow />
        <Transaction />
        <Bookkeeping />
        <Customer />
      </Layout>
    </>
  );
};

export default BusinessPage;
