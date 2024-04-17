import { title } from '@/components/primitives';
import Link from 'next/link';

const ShortIntro = () => {
  return (
    <div className="space-y-5 font-medium">

      <p className="text-xl space-x-2 mt-10">
        Hi, I&apos;m<span className={`font-medium text-primary-600`}>{" "}Abhijay Rajvansh</span>
      </p>

      <h1 className='text-4xl py-3 sm:text-5xl font-semibold'>
        <span>I develop </span>
          <span className={title({color:'green'})}>full-stack</span>
          <span> softwares that people <span className={title({color: 'pink'})}>love.</span>
        </span>
      </h1>

      <p className="font-normal text-color-text leading-relaxed">
        Freelance Web & Mobile Developer, Former Silicon Valley Intern, Apple Developer Awardee, Former AI/ML Researcher @L&D Hospital, UK and {' '}
        <Link className="text-primary-600 font-medium sm:font-normal hover:underline underline-offset-4" href={'/about'}>more...</Link>
      </p>

    </div>
  )
}

export default ShortIntro;