import Guestbook from "@/components/Guestbook";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Guestbook",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <Guestbook />
  )
}

export default page;
