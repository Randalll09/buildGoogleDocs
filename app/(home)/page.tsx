"use client";

import React from "react";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FullscreenLoader } from "@/components/fullscreen-loader";

const Home = () => {
  const documents = useQuery(api.documents.get);

  if (documents === undefined) {
    return <FullscreenLoader label="Loading documents..." />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-100 h-16 p-4 bg-white">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Home;
