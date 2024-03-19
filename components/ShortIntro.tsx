import { title } from '@/components/primitives';
import Link from 'next/link';

const ShortIntro = () => {
  return (
    <div className="space-y-5 my-5 mt-7 font-medium">

      <p className="text-xl space-x-2 mb-5">
        <span>Hi, I'm</span>
        <span className={`font-medium text-primary-600`}>Abhijay Rajvansh</span>
      </p>

      <h1 className={`${title()}text-[2rem] leading-tight font-semibold`}>
        <span>I develop </span>
          <span className={title({color:'green'})}>full-stack</span>
          <span> softwares that people <span className={title({color: 'pink'})}>love.</span>
        </span>
      </h1>

      <p className="pt-3 font-normal text-[#94A3B8] leading-relaxed">
        <span className="">Freelance</span> Web & Mobile Developer, <span className="">Former Silicon Valley</span> Intern, <span className="">Apple</span> Development Trainee, Former <span className="">AI/ML Researcher</span> @L&D Hospital, UK and <Link className="text-primary-600 font-medium" href={'/about'}>more...</Link>
      </p>

    </div>
  )
}

export default ShortIntro;