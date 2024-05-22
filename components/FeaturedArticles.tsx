'use client'

import Link from "next/link";
import BlogCard from "./BlogCard";
import { siteConfig } from '@/config/site'

const FeaturedArticles = () => {

  return (
    <div className="flex flex-col items-start">
      
      <h1 className={`subHeading mb-5`}>
        Featured Articles
      </h1>

      <BlogCard 
        thumbnail={siteConfig.blogs.twitter.thumbnail} 
        timeToRead={siteConfig.blogs.twitter.timeToRead} 
        title={siteConfig.blogs.twitter.title} 
        description={siteConfig.blogs.twitter.description} 
        link={siteConfig.blogs.twitter.link}
      />

      <p className="font-light mt-3">Read more on my{" "}
        <Link className="primary-text font-normal hover:underline underline-offset-4" href={'/blog'}>blogs page.
        </Link>
      </p>

    </div>
  )
}

export default FeaturedArticles;
