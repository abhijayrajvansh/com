import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import ThanksNote from "./ThanksNote";
import ExperienceCard from "./ExperienceCard";
import SocialConnections from "./SocialConnections";
import {
  technicalSkills,
  languages,
  technicalTools,
} from "@/config/skills.config";

import { courseworks } from "@/config/coursework.config";
import Timeline from "./Timeline";
import GradientText from "./GradientText";

const Experience = () => (
  <section className="wrapper">
    <Header />
    <NavigationTab />

    <div className="pageWrapper sm:mt-10">
      <main className="contentWrapper mb-20">
        <h1 className="text-4xl font-bold mb-10 blue-text-bg-gradient">
          Career & Expertise.
        </h1>

        <Timeline />

        <div className="my-10">
          <GradientText color={'pink'}
            className="text-3xl mb-5 font-semibold">
            Relevant Coursework
          </GradientText>
        </div>

        {courseworks.map((course) => (
          <ExperienceCard
            key={course.id}
            companyLogo={course.InstituteLogo}
            position={course.course}
            companyName={course.companyName}
            description={course.description}
            showTimeline={false}
          />
        ))}
      </main>

      <section>
        <div className="my-10 md:hidden"></div>
        <NotesCard title="Technical Skills" elements={technicalSkills} />
        <NotesCard title=" DevOps & Tools" elements={technicalTools} />
        <NotesCard title="Languages" elements={languages} />
        <SocialConnections />
        <ThanksNote />
      </section>
    </div>
  </section>
);

export default Experience;
