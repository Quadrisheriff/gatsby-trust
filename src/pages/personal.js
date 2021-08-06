import * as React from "react";
import Hero from "../components/Personalpage/Hero";
import Layout from "../components/Layout";
import Escrow from "../components/Personalpage/Escrow";
import Transaction from "../components/Personalpage/Transaction";
import Bookkeeping from "../components/Personalpage/Bookkeeping";
import Customer from "../components/Personalpage/Customer";


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