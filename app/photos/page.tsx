import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <pre className="prose prose-neutral dark:prose-invert ">
          <p> Photo by{" "}
            <Link className="no-underline text-sm" href="https://t.me/Alex_Parshinn ">Alex Parshinn [ +995574152401 ]</Link>
          </p>
      </pre>
      
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/images/party1.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
         {
            src: "/images/party2.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party3.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party4.jpg",
            alt: "Party 1 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party5.jpg",
            alt: "Party 5 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          
          {
            src: "/images/party6.jpg",
            alt: "Party 6 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party7.jpg",
            alt: "Party 7 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party8.jpg",
            alt: "Party 8 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
          {
            src: "/images/party9.jpg",
            alt: "Party 9 well",
            href: "https://www.istockphoto.com/photos/restaurant-party",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/images/party1.jpg", alt: "P" },
          { src: "/images/party2.jpg", alt: "T" },
          { src: "/images/party3.jpg", alt: "S" },
          { src: "/images/party4.jpg", alt: "I" },
          { src: "/images/party5.jpg", alt: "A" },
          { src: "/images/party6.jpg", alt: "V" },
          { src: "/images/party7.jpg", alt: "P" },
          { src: "/images/party8.jpg", alt: "P" },
          { src: "/images/party9.jpg", alt: "P" },
          
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/images/party1.jpg", alt: "P" },
          { src: "/images/party2.jpg", alt: "T" },
          { src: "/images/party3.jpg", alt: "S" },
          { src: "/images/party4.jpg", alt: "I" },
          { src: "/images/party5.jpg", alt: "A" },
          { src: "/images/party6.jpg", alt: "V" },
          { src: "/images/party7.jpg", alt: "P" },
          { src: "/images/party8.jpg", alt: "P" },
          { src: "/images/party9.jpg", alt: "P" },
        ]}
      />
    </section>
  );
}
