import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Reviews from "./Pages/Reviews";
import About from "./Pages/About";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <>
      <body className="font-sans">
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
