const Stats = () => {
  return (
    <div className="my-5 rounded-xl shadow-md sm:mt-10">
      <div className="flex items-center justify-between sm:justify-around px-4 py-3 rounded-xl cardTop-BottomGradient border border-border">
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-bold">37+</p>
          <p className="text-sm text-color-text font-medium">Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-bold">20</p>
          <p className="text-sm text-color-text font-medium">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-bold">7</p>
          <p className="text-sm text-color-text font-medium">Awards</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-bold">4+</p>
          <p className="text-sm text-color-text font-medium">Years</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
