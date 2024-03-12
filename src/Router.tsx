import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { OrderCompleted } from "./Pages/OrderCompleted";
import { Cart } from "./Pages/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/order-completed" element={<OrderCompleted />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
