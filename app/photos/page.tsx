import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/dog.jpg",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/photos/pic1.jpg",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },
          {
            src: "/photos/vs-code.png",
            alt: "code",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/ableton.png",
            alt: "Leto",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/bf-algo.png",
            alt: "Graph",
            href: "https://github.com/ivanIStereotekk",
          },
          
          {
            src: "/photos/tb-03.jpg",
            alt: "Tbilisi",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/tree.png",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/dog.jpg", alt: "Posing" },
          { src: "/photos/tree.png", alt: "Tree" },
          { src: "/photos/pic1.jpg", alt: "Studio" },
          { src: "/photos/ew-01.jpg", alt: "Ivan" },
          { src: "/photos/ableton.png", alt: "Ableton" },
          { src: "/photos/vs-code.png", alt: "VS-Code" },
          { src: "/photos/fl-02.jpg", alt: "Plane" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/pic1.jpg", alt: "***" },
          { src: "/photos/ableton.png", alt: "me" },
          { src: "/photos/dog.jpg", alt: "Dog" },
          { src: "/photos/vs-code.png", alt: "eq" },
          { src: "/photos/fl-02.jpg", alt: "Plane" },
          { src: "/photos/tree.png", alt: "Tree" },
        ]}
      />
    </section>
  );
}
