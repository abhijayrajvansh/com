"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import AddGap from "./AddGap";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./Subscription";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { siteConfig } from "@/config/site";


const Blog = () => {
  const [tabContent, setTabContent] = useState("lat");

  function handleTabContent(topic: string) {
    setTabContent(topic);
  }

  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">
        <main className="contentWrapper">
          <h1 className="text-4xl font-semibold">My Blog</h1>

          <div className="flex flex-col items-start">
            <AddGap vertical="3" />

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
                
                <BlogCard thumbnail={siteConfig.blogs.twitter.thumbnail} date={siteConfig.blogs.twitter.date} timeToRead={siteConfig.blogs.twitter.timeToRead} title={siteConfig.blogs.twitter.title} description={siteConfig.blogs.twitter.description} />

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

        <Subscription />
      
      </div>
    </section>
  );
};

export default Blog;
