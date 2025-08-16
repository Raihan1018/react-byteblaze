import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
      <Hero />
    </div>
  );
};

export default Home;
