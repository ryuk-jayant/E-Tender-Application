import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header";
import Admin from "./pages/Admin";
import TenderDetails from "./pages/TenderDetails";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/tender/:id" element={<TenderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
