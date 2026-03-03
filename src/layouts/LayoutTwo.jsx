import { Link, Outlet, useLocation } from "react-router-dom";

function LayoutTwo() {
const location = useLocation();

const linkStyle = (path) => ({
display: "block",
padding: "12px",
borderRadius: "12px",
textDecoration: "none",
marginBottom: "10px",
fontWeight: "500",
backgroundColor:
location.pathname === path ? "#9f7aea" : "transparent",
color:
location.pathname === path ? "white" : "#6b46c1",
});

return (
<div
style={{
display: "flex",
minHeight: "100vh",
fontFamily: "Arial, sans-serif",
}}
>
{/* Sidebar */}
<div
style={{
width: "230px",
background: "linear-gradient(to bottom, #e9d8fd, #d6bcfa)",
padding: "30px",
boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
}}
>
<h2 style={{ color: "#6b46c1" }}> Menu</h2>
<Link to="/" style={linkStyle("/")}>
Home
</Link>
<Link to="/price-checker" style={linkStyle("/price-checker")}>
Price Checker
</Link>
</div>

{/* Content */}
<div
style={{
flex: 1,
padding: "50px",
background: "#faf5ff",
}}
>
<div
style={{
backgroundColor: "white",
padding: "40px",
borderRadius: "20px",
boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
}}
>
<Outlet />
</div>
</div>
</div>
);
}

export default LayoutTwo;