"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import BlogCard from "@/components/BlogCard";
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Twitter from "./Twitter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allBlogs } from "@/config/blog.config";

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
              <TabsList>
                <TabsTrigger className="text-xs sm:text-sm" value="all">
                  All
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm" value="popular">
                  Popular
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
                <TabsTrigger className="text-xs sm:text-sm" value="beginners">
                  Beginners
                </TabsTrigger>
              </TabsList>


              <TabsContent value="all">
                {allBlogs
                  .map((blog) => (
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

              <TabsContent value="popular">
                {allBlogs
                  .filter((blog) => blog.popular)
                  .map((blog) => (
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
                  .filter((blog) => blog.tutorials)
                  .map((blog) => (
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
                  .filter((blog) => blog.productivity)
                  .map((blog) => (
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

              <TabsContent value="beginners">
                {allBlogs
                  .filter((blog) => blog.beginners)
                  .map((blog) => (
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
