import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Hello</p>
      <Link className="underline text-blue-500" href={"/documents/123"}>
        CLick to Doc Id
      </Link>
    </div>
  );
};

export default Home;
