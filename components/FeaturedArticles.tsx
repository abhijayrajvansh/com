"use client";

import Link from "next/link";
import BlogCard from "./BlogCard";
import { allBlogs } from "@/config/blog.config";
import { BlogInterface } from "@/types/blog.types";

const FeaturedArticles = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="subHeading mb-3">Featured Articles</h1>

      {allBlogs
        .filter((blog: BlogInterface) => blog.category.featured)
        .map((blog: BlogInterface) => (
        <BlogCard
          key={blog.id}
          thumbnail={blog.thumbnail}
          timeToRead={blog.timeToRead}
          title={blog.title}
          description={blog.description}
          link={blog.link}
        />
      ))}

      <p className="font-light mt-3">
        Read more on my{" "}
        <Link
          className="primary-text font-normal hover:underline underline-offset-4"
          href={"/blog"}
        >
          blogs page.
        </Link>
      </p>
    </div>
  );
};

export default FeaturedArticles;
