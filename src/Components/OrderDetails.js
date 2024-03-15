import React from "react";

function OrderDetails() {
  return (
    <>
      <div className="orderDetails" style={{ paddingBottom: "3.75rem" }}>
        <div className="orderDetails-inner">
          <h4>
            1 x New York Strip <span className="order-prise">$130.60</span>
          </h4>
          <h5>1 x Medium</h5>
          <h5>1 x Baked Potato</h5>
          <h5 className="last-H5">1 x Coleslaw</h5>

          <hr
            style={{
              width: "100%",
              borderBottom: "1px solid #707070",
              margin: "1.25rem 0",
            }}
          />

          <h4>
            1 x Prime Ribeye <span className="order-prise">$47.90</span>
          </h4>
          <h5>1 x Medium</h5>
          <h5>1 x French Fries</h5>
          <h5 className="last-H5">1 x Corn Niblets</h5>

          <hr
            style={{
              width: "100%",
              borderBottom: "1px solid #707070",
              margin: "1.25rem 0",
            }}
          />

          <h4>
            1 x Prime Ribeye Xtra Cut{" "}
            <span className="order-prise">$22.90</span>
          </h4>
          <h5>1 x Medium</h5>
          <h5>1 x Baked Potato</h5>
          <h5 className="last-H5">1 x Corn Niblets</h5>

          <hr
            style={{
              width: "100%",
              borderBottom: "1px solid #707070",
              margin: "1.25rem 0",
            }}
          />

          <h4>
            1 x New York Strip <span className="order-prise">$130.60</span>
          </h4>
          <h5>1 x Medium</h5>
          <h5>1 x Baked Potato</h5>
          <h5 className="last-H5">1 x Coleslaw</h5>

          <hr
            style={{
              width: "100%",
              borderBottom: "1px solid #707070",
              margin: "1.25rem 0",
            }}
          />

          <h4 className="orderPrice">
            Subtotal <span>$130.60</span>
          </h4>
          <h4 className="orderPrice">
            GST 8% <span>$10.45</span>
          </h4>
          <h3 className="last-H5">
            Total <span style={{fontWeight: "bold"}}>$141.05</span>
          </h3>
        </div>
      </div>
    </>
  );
}
export default OrderDetails;
