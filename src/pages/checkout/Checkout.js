import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from './Checkout.module.scss';

const Checkout = () => {
  const [message, setMessage] = useState("Initializing checkout...");
  const data = {
    total_amount: 100,
    currency: 'EUR',
    tran_id: 'REF123',
    success_url: 'http://localhost:4242/checkout-suc',
    fail_url: 'http://localhost:4242/checkout-fail',
    cancel_url: 'http://yoursite.com/cancel',
    ipn_url: 'http://yoursite.com/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'cust@yahoo.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    multi_card_name: 'mastercard',
    value_a: 'ref001_A',
    value_b: 'ref002_B',
    value_c: 'ref003_C',
    value_d: 'ref004_D'
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data),
  };
  
  useEffect(() => {
    fetch("http://localhost:4242/ssl-checkout", options)
    .then(res => {
      if(!res.ok){
        setMessage("Failed to initialize ssl-checkout");
      }
      //return res.json()
    })
    .catch((error) => {
      console.log(error);
      setMessage("Failed to initialize checkout");
      toast.error("Something went wrong!!!");
    })
  });

  return (
    <>
      <section className={styles.footer}>
        <div className="container">
          <h3>{message}</h3>
        </div>
      </section>
    </>
  );
};

export default Checkout;

