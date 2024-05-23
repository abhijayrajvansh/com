import Resume from "@/components/Resume";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Experience",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <section>
      <Resume />
    </section>
  )
}

export default page;