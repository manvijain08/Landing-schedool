import React from "react";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Third from "./Third/Third";
import List from "./List/List";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import button from "./button";
import "./App.scss";
function App() {
  return (
    <div className="chart">
      <Hero />
      <Feature />
      <Third />
      <List />
      <Testimonials />
      <Footer />
      <button />
    </div>
  );
}

export default App;