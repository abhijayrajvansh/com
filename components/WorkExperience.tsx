import Link from "next/link";
import Timeline from "./Timeline";

const WorkExperience = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-12 mb-7 yellow-text-bg-gradient">
        Work Experience
      </h1>
      <Timeline />
      <p className="font-light">
        See a list of technical skills on{" "}
        <Link
          className="primary-text hover:underline underline-offset-4"
          href={"/experience"}
        >
          experience page.
        </Link>
      </p>
    </>
  );
};

export default WorkExperience;
