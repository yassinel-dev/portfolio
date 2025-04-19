import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import About from "./Pages/About";
function App() {
  return (
    <div className="font-poppin bg-gray-950 text-white min-h-screen overflow-x-hidden pt-20 ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
//
