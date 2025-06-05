import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { metaData } from "./config";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let menu = getBlogPosts().map((post) => ({
    url: `${BaseUrl}menu/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let drink = getBlogPosts().map((post) => ({
    url: `${BaseUrl}drink/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "menu", "projects", "photos","drink"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...menu,...drink];
}
