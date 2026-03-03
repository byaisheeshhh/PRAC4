import { useState } from "react";

function ProductDetails({ setData }) {
const [name, setName] = useState("");
const [quantity, setQuantity] = useState("");
const [price, setPrice] = useState("");

const handleCalculate = () => {
const total = quantity * price;

setData({
name,
quantity,
price,
total,
});
};

const handleReset = () => {
setName("");
setQuantity("");
setPrice("");
setData(null);
};

const inputStyle = {
display: "block",
width: "100%",
padding: "12px",
marginBottom: "15px",
borderRadius: "12px",
border: "1px solid #ffc0cb",
outline: "none",
fontSize: "14px",
};

const buttonStyle = {
padding: "10px 25px",
borderRadius: "25px",
border: "none",
cursor: "pointer",
fontWeight: "bold",
fontSize: "14px",
transition: "0.3s",
};

return (
<div>
<input
type="text"
placeholder="Product Name"
value={name}
onChange={(e) => setName(e.target.value)}
style={inputStyle}
/>

<input
type="number"
placeholder="Quantity"
value={quantity}
onChange={(e) => setQuantity(e.target.value)}
style={inputStyle}
/>

<input
type="number"
placeholder="Unit Price"
value={price}
onChange={(e) => setPrice(e.target.value)}
style={inputStyle}
/>

<div style={{ marginTop: "10px" }}>
<button
onClick={handleCalculate}
style={{
...buttonStyle,
backgroundColor: "#ff69b4",
color: "white",
marginRight: "10px",
}}
>
Calculate
</button>

<button
onClick={handleReset}
style={{
...buttonStyle,
backgroundColor: "#f8bbd0",
color: "#d63384",
}}
>
 Reset
</button>
</div>
</div>
);
}

export default ProductDetails;