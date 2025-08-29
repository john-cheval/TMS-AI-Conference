import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-y-10">
      <p className=" font-dubai text-3xl md:text-5xl font-light">
        Home Page (Light)
      </p>
      <p className=" font-dubai text-3xl md:text-5xl font-normal">
        Home Page (Regular)
      </p>

      <p className=" font-dubai text-3xl md:text-5xl font-medium">
        Home Page (Medium)
      </p>

      <p className="font-dubai text-3xl md:text-5xl font-bold">
        Home Page (Bold)
      </p>
    </div>
  );
};

export default Home;
