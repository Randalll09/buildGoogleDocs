import Link from "next/link";
import React from "react";
import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-100 h-16 p-4 bg-white">
        <Navbar />
      </div>
      <div className="-scroll-mt-16">
        <p>Hello</p>
        <Link className="underline text-blue-500" href={"/documents/123"}>
          CLick to Doc Id
        </Link>
      </div>
    </div>
  );
};

export default Home;
