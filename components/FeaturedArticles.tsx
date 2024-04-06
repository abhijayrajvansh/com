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
      <h1 className={`subHeading`}>
        Featured Articles
      </h1>

      <AddGap vertical="2"/>

      <ButtonGroup size="sm" radius="sm" variant="flat">
        <Button color={tabContent === 'latest' ? 'primary' : 'default'} onClick={() => handleTabContent('latest')}>Latest</Button>

        <Button color={tabContent === 'programming' ? 'success' : 'default'} onClick={() => handleTabContent('programming')}>Programming</Button>

        <Button color={tabContent === 'articles' ? 'warning' : 'default'} onClick={() => handleTabContent('articles')}>Articles</Button>

      </ButtonGroup>

      <AddGap vertical="1"/>

      {
        tabContent === 'latest' ?
        <div className="p-2 rounded-xl w-full">

          {/* latest : to pin only 3 for user to scroll other content */}

          <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

        </div>:

        tabContent === 'programming' ?
        <div className="p-2 rounded-xl w-full">
          {/* programming */}
          <p>checking programming</p>
        </div>:

        <div className="p-2 rounded-xl w-full">
          {/* articles */}
          <p>checking articles</p>
        </div>
      }

      <p className="my-5 font-light">Discover <span className="text-success-500 font-normal">software engineering</span> with <span className="text-warning-600 font-normal">top industry standards</span> practices <Link className="text-primary-600 font-medium" href={'/blog'}>on my blog.</Link></p>

    </div>
  )
}

export default FeaturedArticles;