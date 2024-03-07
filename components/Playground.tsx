// playground imports
import { title } from "../components/primitives";
import { Button, Link, Chip} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";


const Playground = () => {
  return (
    <>
      <div className="my-5">
        <h1 className={title({color: 'yellow'})}>Playground Area!</h1>
      </div>
      {/* ********************************** */}







      {/* project card  */}
      <div className="my-5 rounded-xl p-4 shadow-xl border border-default-300">

        <div className="flex justify-between items-center">

          <div className="text-2xl font-bold">Twitter Clone</div>
          <Chip size="md" variant="flat" color="success">
            personal project
          </Chip>

        </div>
        
        <div className="mt-3 text-default-500">Tech Stack: next.js, typescript, tailwindcss...</div>
        

        <img className="mt-5 rounded-2xl shadow-xl border border-default-200" src="/xTwitterThumbnail.webp" alt="project-thumbnail" />


        <div className="flex justify-between mt-5">

          <Button size="md"
            isExternal={true}
            href="/"
            as={Link}
            variant="bordered"
            
          >
            <FaGithub size={'21'} /> 
            GitHub
          </Button>

          <Button size="md"
            color="danger"
            isExternal={true}
            href="/"
            as={Link}
            variant="solid"
            showAnchorIcon
          >
            Visit
            
          </Button>

        </div>

      </div>
      






      {/* ********************************** */}
      <p>
        sample text: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto est officiis, ex molestiae harum non totam? Quos quidem iure unde, incidunt, illum deleniti reprehenderit accusamus pariatur quisquam dolore facere distinctio? Fugiat perspiciatis dolores corrupti accusamus in ducimus a! Beatae impedit labore tempore corrupti quos id cupiditate esse, distinctio ex autem debitis quod iste? Modi est ea ad, molestias soluta totam doloremque officiis error incidunt esse, ipsam nulla! Distinctio ut, vel, blanditiis alias tenetur asperiores deserunt explicabo consequatur perferendis nulla doloremque! Hic veniam officia voluptatem quas, cumque unde perferendis eveniet cum aperiam quasi exercitationem ipsum, libero nisi temporibus in voluptates repellendus!
      </p>
    </>
  )
}

export default Playground;