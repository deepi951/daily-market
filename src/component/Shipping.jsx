import { useState, useEffect } from 'react';

const steps = ['Placed', 'In Progress', 'Packed', 'Out for Delivery', 'Delivered'];

function Shipping() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2>Shipping Progress</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index} style={{ color: index <= currentStep ? 'green' : 'gray' }}>
            {step} {index <= currentStep && '✔️'}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Shipping;
