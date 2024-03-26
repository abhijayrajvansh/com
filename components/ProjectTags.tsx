interface ProjectTagsProps {
  icon: React.ElementType ;
  iconColor?: string;
  technologyName: string;
}

const ProjectTags:React.FC<ProjectTagsProps> = ({icon, technologyName, iconColor="text-white"}) => {

  const Icon = icon;

  return (
    <div className="text-sm">
      <div className={`text-[11px] flex items-center ${iconColor} bg-gray-800 gap-[5px] font-medium w-fit px-[4px] pr-[7px] rounded-full`}>
        <Icon size={18} />
        <p className="text-white">{technologyName}</p>
      </div>
    </div>
  )
}

export default ProjectTags;