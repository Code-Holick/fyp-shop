import styles from "./CheckoutForm.module.scss";
import Card from "../card/Card";
import CheckoutSummary from "../checkoutSummary/CheckoutSummary";

const CheckoutForm = () => {

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout</h2>
        <div>
            <Card cardClass={styles.card}>
              <CheckoutSummary />
            </Card>
          </div> 
      </div>
    </section>
  );
};

export default CheckoutForm;

