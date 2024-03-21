'use client'

import { useState } from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import AddGap from "./AddGap";
import BlogCard from "./BlogCard";
import { siteConfig } from '@/config/site'

const RecentArticles = () => {

  const [tabContent, setTabContent  ] = useState('latest');

  function handleTabContent (topic: string) {
    setTabContent(topic)
  }

  return (
    <div className="flex flex-col items-start">
      <h1 className={`font-semibold text-xl inline-block mt-5`}>
        Recent Blogs
      </h1>

      <AddGap vertical="2"/>

      <ButtonGroup radius="sm" variant="flat">
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

          <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

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

    </div>
  )
}

export default RecentArticles;