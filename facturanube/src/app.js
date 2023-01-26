import {  Route, Routes, useRoutes } from "react-router-dom";
import Invoice from "./components/invoice/invoice";
import Login from "./components/login/login";
import { ProtectedRoute } from "./providers/protectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route path="invoice" element={<Invoice />} />
      </Route>
    </Routes>
  );
}