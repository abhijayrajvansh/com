'use client'

import { useState } from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import AddGap from "./AddGap";
import BlogCard from "./BlogCard";
import { siteConfig } from '@/config/site'
import Link from "next/link";

const FeaturedArticles = () => {

  const [tabContent, setTabContent  ] = useState('latest');

  function handleTabContent (topic: string) {
    setTabContent(topic)
  }

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
