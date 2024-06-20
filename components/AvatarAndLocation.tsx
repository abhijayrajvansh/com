import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";

const AvatarAndLocation = () => {
  return (
    <Link href={"/"} className="hidden sm:flex mb-5 justify-center">
      <div className="flex items-center space-x-2 pl-2">
        <Image
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl border-2 border-border"
          src={siteConfig.avatar.src}
          alt="@abhijayrajvansh"
        />

        <div className="hidden xl:block text-[11px] font-medium">
          <p className="primary-text text-sm">Abhijay Rajvansh</p>
          <p className="text-xs font-normal">software engineer</p>
        </div>
      </div>
    </Link>
  );
};

export default AvatarAndLocation;
