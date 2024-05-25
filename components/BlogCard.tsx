import Link from "next/link";
import AddGap from "./AddGap";
import { FaLink } from "react-icons/fa6";
import Image from "next/image";

interface BlogCardProps {
  thumbnail: string;
  timeToRead: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnail,
  timeToRead,
  title,
  description,
  link,
}) => {
  return (
    <div className="border-b border-border py-1">
      <AddGap vertical="2" />
      <div className="flex gap-5 items-center">
        <Image
          width={80}
          height={80}
          className="rounded-xl size-16 sm:size-20"
          src={thumbnail}
          alt={title}
        />

        <div className="space-y-1">
          <div className="flex items-center justify-between gap-5 sm:pr-5 pr-3">
            <p className="text-sm text-color-text">
              <span className="primary-text"> — </span> {timeToRead}
            </p>

            <Link href={link}>
              <FaLink className="size-5 primary-text" />
            </Link>
          </div>

          <Link
            href={link}
            className="text-lg font-semibold hover:underline underline-offset-4 transition hover:text-blue-400"
          >
            {title}
          </Link>

          <p className="text-sm text-color-text">{description}</p>
        </div>
      </div>
      <AddGap vertical="2" />
    </div>
  );
};

export default BlogCard;
