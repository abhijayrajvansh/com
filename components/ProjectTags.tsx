interface ProjectTagsProps {
  icon: React.ElementType ;
  iconColor?: string;
  technologyName: string;
}

import { Chip } from "@nextui-org/react";

const ProjectTags:React.FC<ProjectTagsProps> = ({icon, technologyName, iconColor="text-white"}) => {

  const Icon = icon;

  return (
    <Chip className={`bg-gray-800 ${iconColor}`} size="sm" variant="flat" startContent={<Icon size={18}/>}>
      <p className="text-white">{technologyName}</p>
    </Chip>
  )
}

export default ProjectTags;