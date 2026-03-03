import { Routes, Route } from "react-router-dom";
import LayoutOne from "./layouts/LayoutOne";
import HomePage from "./Pages/HomePage";
import PriceChecker from "./Pages/PriceChecker";

function App() {
return (
<Routes>
<Route path="/" element={<LayoutOne />}>
<Route index element={<HomePage />} />
<Route path="price-checker" element={<PriceChecker />} />
</Route>
</Routes>
);
}

export default App;