interface BlogCardProps {
  thumbnail: string, 
  date: string,
  timeToRead: string, 
  title: string, 
  description: string,
}

const BlogCard:React.FC<BlogCardProps> = ({thumbnail, date, timeToRead, title, description}) => {
  return (
    <div className="flex gap-3 items-center">
      <img className="rounded-xl size-16 md:size-20 lg:size-24" src={thumbnail} alt={title} />
      <div className="space-y-1">
        <p className="text-sm text-default-500"><span className="text-primary-500"> — </span>{date} · {timeToRead}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-default-500">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard;