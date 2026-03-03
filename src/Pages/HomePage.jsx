import { useEffect } from "react";

function HomePage() {
useEffect(() => {
document.title = "Home";
}, []);

const cardStyle = {
backgroundColor: "white",
padding: "25px",
borderRadius: "20px",
boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
marginBottom: "25px",
};

return (
<div style={{ textAlign: "center" }}>
{/* Cute Header */}
<h1 style={{ color: "#ff69b4", marginBottom: "10px" }}>
 Welcome to Price Checker App 
</h1>


</div>

);
}

export default HomePage;