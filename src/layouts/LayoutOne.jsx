import { Link, Outlet, useLocation } from "react-router-dom";

function LayoutOne() {
const location = useLocation();

const linkStyle = (path) => ({
padding: "10px 18px",
borderRadius: "20px",
textDecoration: "none",
fontWeight: "500",
transition: "0.3s",
backgroundColor:
location.pathname === path ? "#ff85a2" : "transparent",
color:
location.pathname === path ? "white" : "#d63384",
});

return (
<div
style={{
minHeight: "100vh",
background: "linear-gradient(to right, #ffe6f0, #ffd6eb)",
fontFamily: "Arial, sans-serif",
}}
>
{/* Navigation */}
<nav
style={{
backgroundColor: "#ffc0cb",
padding: "20px 40px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}}
>
<h2 style={{ color: "#d63384", margin: 0 }}>
 Price Checker App
</h2>

<div style={{ display: "flex", gap: "15px" }}>
<Link to="/" style={linkStyle("/")}>
Home
</Link>
<Link to="/price-checker" style={linkStyle("/price-checker")}>
Price Checker
</Link>
</div>
</nav>

{/* Page Content */}
<div
style={{
maxWidth: "900px",
margin: "50px auto",
padding: "40px",
backgroundColor: "white",
borderRadius: "20px",
boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
}}
>
<Outlet />
</div>

{/* Footer */}
<footer
style={{
textAlign: "center",
padding: "15px",
color: "#d63384",
marginTop: "40px",
}}
>
© 2026 Price Checker App
</footer>
</div>
);
}

export default LayoutOne;