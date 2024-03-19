import AddGap from "./AddGap";

const technicalskills = [
  "element-1",
  "elememt-2",
  "element-3",
]


const TechnicalSkills = () => {
  return (
    <div className="w-full px-5 mt-10 sm:mt-0 sm:ml-2">
      <div className={` rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[700px] lg:max-w-[280px] border border-default-200 mb-10 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom rotate-1 hover:rotate-0 transition`}>
        
        <h1 className="text-xl font-medium">Technical Skills</h1>
        <AddGap vertical="1" />

        {
          technicalskills.map(skill => (
            <p className="text-sm space-x-3 mt-3"><span className="text-primary-500">—</span><span>{skill}</span></p>
          ))
        }



      </div>
    </div>
  )
}

export default TechnicalSkills;