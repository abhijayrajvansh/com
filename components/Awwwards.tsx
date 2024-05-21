import AchievementCard from "./AchievementCard";

const Awwwards = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold my-2 green-text-bg-gradient">
        Awards & Achievements
      </h1>

      <AchievementCard
        title="achievement title"
        thumbnail="bg-[url('/cn.webp')]"
        position="always winner"
        tilt="left"
      />
    </>
  );
};

export default Awwwards;
