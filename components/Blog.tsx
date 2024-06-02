"use client";

import AddGap from "./AddGap";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { siteConfig } from "@/config/site.config";
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Twitter from "./Twitter";

const Blog = () => {
  const [tabContent, setTabContent] = useState("lat");

  function handleTabContent(topic: string) {
    setTabContent(topic);
  }

  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:my-10">
        <main className="contentWrapper">
          <h1 className="text-4xl font-bold mb-10 yellow-text-bg-gradient">
            Stories & Coding.
          </h1>

          <div className="flex flex-col items-start">
            {/* button group and tab goes here */}

            <AddGap vertical="1" />

            {tabContent === "lat" ? (
              <div className="p-2 pl-0 rounded-xl w-full">
                <BlogCard
                  thumbnail={siteConfig.blogs.twitter.thumbnail}
                  timeToRead={siteConfig.blogs.twitter.timeToRead}
                  title={siteConfig.blogs.twitter.title}
                  description={siteConfig.blogs.twitter.description}
                  link={siteConfig.blogs.twitter.link}
                />
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

        <section>
          <div className="my-10 md:hidden"></div>
          <Newsletter />
          <TechnicalSkills />
          <Twitter />
          <SocialConnections />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default Blog;
