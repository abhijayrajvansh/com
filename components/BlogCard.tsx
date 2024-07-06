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
  tutorial: boolean;
  productivity: boolean;
  notes: boolean;
  philosophy: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnail,
  timeToRead,
  title,
  description,
  link,
  tutorial,
  productivity,
  notes,
  philosophy,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex gap-5 items-center hover:cursor-pointer hover:bg-[#efefef] dark:hover:bg-[#1c2638] hover:primary-text p-3 rounded-lg my-1"
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
            <div className="text-sm text-color-text flex items-center">
              <div className="font-light">— {timeToRead} &nbsp;</div>
              {tutorial && <div className="py-1 px-2 dark:bg-primary/50 bg-primary/80 font-medium text-xs text-white rounded-sm mx-1">
                Tutorials
              </div>}
              {productivity && <div className="py-1 px-2 text-white dark:bg-green-700/90 bg-green-600/90 font-medium text-xs rounded-sm mx-1">
                Productivity
              </div>}
              {notes && <div className="py-1 px-2 text-yellow-900 dark:bg-yellow-400/90 bg-yellow-400 font-semibold text-xs rounded-sm mx-1">
                Notes
              </div>}
              {philosophy && <div className="py-1 px-2 dark:bg-pink-500/50 bg-pink-500/90 font-medium text-xs text-white rounded-sm mx-1">
                Philosophy
              </div>}
            </div>

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
