'use client'

import BlogCard from "./BlogCard";
import { siteConfig } from '@/config/site'

const FeaturedArticles = () => {

  return (
    <div className="flex flex-col items-start">
      
      <h1 className={`subHeading mb-5`}>
        Featured Articles
      </h1>

      <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

    </div>
  )
}

export default FeaturedArticles;
