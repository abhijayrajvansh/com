import Home from "@/components/Home";
import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Abhijay Rajvansh • Full-stack Software Engineer",
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  // todo: add all the metadata and prompt twitter and thumbnail data
};

const page = () => {
  return <Home />;
};

export default page;
