import { title } from '@/components/primitives';
import Link from 'next/link';

const ShortIntro = () => {
  return (
    <div className="space-y-7 my-7 font-medium">

      <p className="text-xl space-x-2 my-7">
        Hi, I&apos;m<span className={`font-medium text-primary-600`}>{" "}Abhijay Rajvansh</span>
      </p>

      <h1 className={`${title()}text-[2rem] leading-tight font-semibold`}>
        <span>I develop </span>
          <span className={title({color:'green'})}>full-stack</span>
          <span> softwares that people <span className={title({color: 'pink'})}>love.</span>
        </span>
      </h1>

      <p className="font-normal text-color-text leading-relaxed">
        <span>Freelance</span> Web & Mobile Developer, <span>Former Silicon Valley</span> Intern, <span>Apple</span> Development Trainee, Former <span>AI/ML Researcher</span> @L&D Hospital, UK and <Link className="text-primary-600 font-medium sm:font-normal hover:underline underline-offset-4" href={'/about'}>more...</Link>
      </p>

    </div>
  )
}

export default ShortIntro;