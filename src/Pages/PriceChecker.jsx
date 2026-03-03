import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import BillingDetails from "../components/BillingDetails";

function PriceChecker() {
const [data, setData] = useState(null);

useEffect(() => {
document.title = "Price Checker";
}, []);

return (
<div>
<h2>Price Checker</h2>

<ProductDetails setData={setData} />

{data && <BillingDetails data={data} />}
</div>
);
}

export default PriceChecker;