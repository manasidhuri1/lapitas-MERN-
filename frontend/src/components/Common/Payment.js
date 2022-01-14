import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function Payment({ value, name, onSuccess, onError }) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: name,
          amount: {
            value: value,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    const order = actions.order.capture();

    onSuccess();
  };

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: createOrder,
        onApprove: onApprove,
        onError: (err) => {
          console.log({ err });
          onError();
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div ref={paypal}></div>
    // <PayPalButton
    //   createOrder={(data, actions) => createOrder(data, actions)}
    //   onApprove={(data, actions) => onApprove(data, actions)}
    // />
  );
}
export default Payment;
