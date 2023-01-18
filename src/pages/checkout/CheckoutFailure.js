import { Link } from "react-router-dom";
import styles from './CheckoutSuccess.module.scss';

const CheckoutFailure = () => {
  return (
    <section className={styles.custom}>
      <div className="container">
        <h2>Failed to initialize checkout</h2>
        <br />
        <Link to="/#products">Back To Shop</Link>
      </div>
    </section>
  );
};

export default CheckoutFailure;

