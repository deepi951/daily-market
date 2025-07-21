function Payment() {
  const handlePayment = () => {
    alert('Payment Successful! Thank you for shopping with Daily Market.');
  };

  return (
    <section>
      <h2>Payment</h2>
      <p>Choose your payment method:</p>
      <button onClick={handlePayment}>Pay with UPI</button>
      <button onClick={handlePayment}>Pay with Card</button>
      <button onClick={handlePayment}>Pay on Delivery</button>
    </section>
  );
}

export default Payment;
