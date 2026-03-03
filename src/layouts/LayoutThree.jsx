import { Link, Outlet, useLocation } from "react-router-dom";

function LayoutThree() {
const location = useLocation();

const linkStyle = (path) => ({
marginRight: "20px",
textDecoration: "none",
fontWeight: "600",
paddingBottom: "5px",
borderBottom:
location.pathname === path ? "3px solid #38bdf8" : "none",
color: location.pathname === path ? "#0ea5e9" : "#0369a1",
});

return (
<div
style={{
minHeight: "100vh",
background: "linear-gradient(to right, #e0f2fe, #f0f9ff)",
fontFamily: "Arial, sans-serif",
}}
>
{/* Header */}
<header
style={{
padding: "25px 60px",
backgroundColor: "#bae6fd",
boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
}}
>
<h2 style={{ color: "#0369a1" }}> Price Checker</h2>
<div style={{ marginTop: "10px" }}>
<Link to="/" style={linkStyle("/")}>
Home
</Link>
<Link to="/price-checker" style={linkStyle("/price-checker")}>
Price Checker
</Link>
</div>
</header>

{/* Content */}
<div
style={{
maxWidth: "900px",
margin: "60px auto",
padding: "40px",
backgroundColor: "white",
borderRadius: "20px",
boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
}}
>
<Outlet />
</div>
</div>
);
}

export default LayoutThree;