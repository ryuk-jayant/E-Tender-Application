import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header";
import Admin from "./pages/Admin";
import TenderDetails from "./pages/TenderDetails";
import BidForm from "./pages/BidForm";
import AppliedTenders from "./pages/AppliedTenders";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/tender/:id" element={<TenderDetails />} />
        <Route path="/bidform/:id" element={<BidForm />} />
        <Route path="/applied-tenders" element={<AppliedTenders />} />
      </Routes>
    </BrowserRouter>
  );
}
