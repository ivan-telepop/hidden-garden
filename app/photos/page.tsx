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
            src: "/photos/party1.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
         {
            src: "/photos/party2.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party3.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party4.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party5.jpg",
            alt: "Party 5 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          
          {
            src: "/photos/party6.jpg",
            alt: "Party 6 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party7.jpg",
            alt: "Party 7 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party8.jpg",
            alt: "Party 8 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/photos/party9.jpg",
            alt: "Party 9 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/party1.jpg", alt: "P" },
          { src: "/photos/party2.jpg", alt: "T" },
          { src: "/photos/party3.jpg", alt: "S" },
          { src: "/photos/party4.jpg", alt: "I" },
          { src: "/photos/party5.jpg", alt: "A" },
          { src: "/photos/party6.jpg", alt: "V" },
          { src: "/photos/party7.jpg", alt: "P" },
          { src: "/photos/party8.jpg", alt: "P" },
          { src: "/photos/party9.jpg", alt: "P" },
          
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/party1.jpg", alt: "P" },
          { src: "/photos/party2.jpg", alt: "T" },
          { src: "/photos/party3.jpg", alt: "S" },
          { src: "/photos/party4.jpg", alt: "I" },
          { src: "/photos/party5.jpg", alt: "A" },
          { src: "/photos/party6.jpg", alt: "V" },
          { src: "/photos/party7.jpg", alt: "P" },
          { src: "/photos/party8.jpg", alt: "P" },
          { src: "/photos/party9.jpg", alt: "P" },
        ]}
      />
    </section>
  );
}
