function BillingDetails({ data }) {
return (
<div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
<h3>Billing Details</h3>
<p>Product Name: {data.name}</p>
<p>Quantity: {data.quantity}</p>
<p>Unit Price: {data.price}</p>
<h4>Total Price: {data.total}</h4>
</div>
);
}

export default BillingDetails;