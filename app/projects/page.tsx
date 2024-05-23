import Projects from "@/components/Projects";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <section className="wrapper">
      <Projects />
    </section>
  )
}

export default page;