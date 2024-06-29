"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import BlogCard from "@/components/BlogCard";
import ThanksNote from "./ThanksNote";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Twitter from "./Twitter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allBlogs } from "@/config/blog.config";
import { BlogInterface } from "@/types/blog.types";

const Blog = () => {
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
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-5">
                <TabsTrigger className="text-xs sm:text-sm" value="all">
                  All
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm" value="tutorials">
                  Tutorials
                </TabsTrigger>
                <TabsTrigger
                  className="text-xs sm:text-sm"
                  value="productivity"
                >
                  Productivity
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm" value="notes">
                  Notes
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm" value="life">
                  Life
                </TabsTrigger>
              </TabsList>


              <TabsContent value="all">
                {allBlogs
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
              </TabsContent>

              <TabsContent value="life">
                {allBlogs
                  .filter((blog: BlogInterface) => blog.category.life)
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
              </TabsContent>

              <TabsContent value="tutorials">
                {allBlogs
                  .filter((blog: BlogInterface) => blog.category.tutorials)
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
              </TabsContent>

              <TabsContent value="productivity">
                {allBlogs
                  .filter((blog: BlogInterface) => blog.category.productivity)
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
              </TabsContent>

              <TabsContent value="notes">
                {allBlogs
                  .filter((blog: BlogInterface) => blog.category.notes)
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
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <section>
          <div className="my-10 lg:hidden"></div>
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
