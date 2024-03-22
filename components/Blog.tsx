"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import AddGap from "./AddGap";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { siteConfig } from "@/config/site";
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";


const Blog = () => {
  const [tabContent, setTabContent] = useState("lat");

  function handleTabContent(topic: string) {
    setTabContent(topic);
  }

  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-5xl font-semibold mb-10">My Blog</h1>

          <div className="flex flex-col items-start">

            <ButtonGroup radius="sm" variant="flat">
              
              <Button
                color={tabContent === "lat" ? "primary" : "default"}
                onClick={() => handleTabContent("lat")}>
                Latest
              </Button>

              <Button
                color={tabContent === "prog" ? "success" : "default"}
                onClick={() => handleTabContent("prog")}>
                Programming
              </Button>

              <Button
                color={tabContent === "tut" ? "warning" : "default"}
                onClick={() => handleTabContent("tut")}>
                Tutorials
              </Button>

            </ButtonGroup>

            <AddGap vertical="1" />

            {tabContent === "lat" ? (
              <div className="p-2 pl-0 rounded-xl w-full">
                
                <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} link={siteConfig.blogs.twitter.link} />

              </div>
            ) : tabContent === "prog" ? (
              <div className="p-2 rounded-xl w-full">
                <p>programming</p>
              </div>
            ) : (
              <div className="p-2 rounded-xl w-full">
                <p>tutorials</p>
              </div>
            )}

          </div>
        </main>

        <div className="flex flex-col">
          <Newsletter tilt="left" />
          <ThanksNote tilt='right' />
        </div>
      
      </div>
    </section>
  );
};

export default Blog;
