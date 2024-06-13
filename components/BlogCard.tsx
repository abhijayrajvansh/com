import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div className="">
      <div
        onClick={handleClick}
        className="flex gap-5 items-center hover:cursor-pointer hover:bg-[#ecebeb] dark:hover:bg-[#1c2638] hover:primary-text px-3 py-2 rounded-lg my-1"
      >
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
              <span className="primary-text"> — </span>{" "}
              <span className="font-light">{timeToRead}</span>
            </p>

            <Link href={link}>
              <FaLink className="size-5 primary-text" />
            </Link>
          </div>

          <div className="text-lg font-medium">{title}</div>

          <p className="text-sm font-light text-color-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
