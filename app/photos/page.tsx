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
            src: "/party1.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
         {
            src: "/party2.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party3.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party4.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party5.jpg",
            alt: "Party 5 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          
          {
            src: "/party6.jpg",
            alt: "Party 6 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party7.jpg",
            alt: "Party 7 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party8.jpg",
            alt: "Party 8 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/party9.jpg",
            alt: "Party 9 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/party1.jpg", alt: "P" },
          { src: "/party2.jpg", alt: "T" },
          { src: "/party3.jpg", alt: "S" },
          { src: "/party4.jpg", alt: "I" },
          { src: "/party5.jpg", alt: "A" },
          { src: "/party6.jpg", alt: "V" },
          { src: "/party7.jpg", alt: "P" },
          { src: "/party8.jpg", alt: "P" },
          { src: "/party9.jpg", alt: "P" },
          
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/party1.jpg", alt: "P" },
          { src: "/party2.jpg", alt: "T" },
          { src: "/party3.jpg", alt: "S" },
          { src: "/party4.jpg", alt: "I" },
          { src: "/party5.jpg", alt: "A" },
          { src: "/party6.jpg", alt: "V" },
          { src: "/party7.jpg", alt: "P" },
          { src: "/party8.jpg", alt: "P" },
          { src: "/party9.jpg", alt: "P" },
        ]}
      />
    </section>
  );
}
