import Link from "next/link";
import AddGap from "./AddGap";
import { FaLink } from "react-icons/fa6";

interface BlogCardProps {
  thumbnail: string, 
  date: string,
  timeToRead: string, 
  title: string, 
  description: string,
  link: string,
}

const BlogCard:React.FC<BlogCardProps> = ({thumbnail, date, timeToRead, title, description, link}) => {


  return (
    <div className="border-t border-b border-default/50">
      <AddGap vertical="2" />
      <div className="flex gap-5 items-center">

        <img className="rounded-xl size-20 lg:size-24" src={thumbnail} alt={title} />

        <div className="space-y-1">
          <div className="flex items-center gap-5 sm:pr-5 pr-3">
            <p className="text-sm text-default-500"><span className="text-primary-500"> — </span>{date} · {timeToRead}</p>

            <Link href={link}><FaLink className="size-5 text-blue-400" /></Link>

          </div>

            <Link href={link} className="text-lg font-semibold hover:underline underline-offset-4 transition hover:text-blue-400">
              {title}
            </Link>

          <p className="text-sm text-default-500">{description}</p>

        </div>
      </div>
      <AddGap vertical="2" />
    </div>

  )
}

export default BlogCard;