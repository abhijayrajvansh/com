'use client'

import { useState } from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import AddGap from "./AddGap";
import BlogCard from "./BlogCard";
import { siteConfig } from '@/config/site'

const RecentArticles = () => {

  const [tabContent, setTabContent  ] = useState('lat');

  function handleTabContent (topic: string) {
    setTabContent(topic)
  }

  return (
    <div className="flex flex-col items-start">
      <h1 className={`font-semibold text-xl inline-block mt-5`}>
        Recent Articles
      </h1>

      <AddGap vertical="3"/>

      <ButtonGroup radius="sm" variant="flat">
        <Button color={tabContent === 'lat' ? 'primary' : 'default'} onClick={() => handleTabContent('lat')}>Latest</Button>
        <Button color={tabContent === 'prog' ? 'success' : 'default'} onClick={() => handleTabContent('prog')}>Programming</Button>
        <Button color={tabContent === 'tut' ? 'warning' : 'default'} onClick={() => handleTabContent('tut')}>Tutorials</Button>
      </ButtonGroup>

      <AddGap vertical="1"/>

      {
        tabContent === 'lat' ?
        <div className="p-2 rounded-xl w-full">
          {/* latest : to pin only 3 for user to scroll other content */}
          <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

          <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

          <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

        </div>:

        tabContent === 'prog' ?
        <div className="p-2 rounded-xl w-full">
          {/* programming */}
          <p>programming</p>
        </div>:

        <div className="p-2 rounded-xl w-full">
          {/* tutorials */}
          <p>tutorials</p>
        </div>
      }

    </div>
  )
}

export default RecentArticles;