import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import BecomeACPA from "./pages/BecomeACPA";
import Membership from "./pages/Membership";
import Knotia from "./pages/Knotia";
import LearnAndGrow from "./pages/LearnAndGrow";
import Resources from "./pages/Resources";
import Tax360 from "./pages/Tax360";
import CPAStore from "./pages/CPAStore";
import Checkout from "./pages/Checkout";
import Article from "./pages/Article";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/become-a-cpa" element={<BecomeACPA />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/knotia" element={<Knotia />} />
        <Route path="/learn" element={<LearnAndGrow />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tax-360" element={<Tax360 />} />
        <Route path="/cpastore" element={<CPAStore />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  );
}
