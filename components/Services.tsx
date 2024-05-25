"use client";

import ServiceThumbnail from "./ServiceThumbnail";
import DummyCard from "./DummyCard";

const Services = () => {
  return (
    <div>
      <h1 className={`subHeading mb-5`}>Top Requested Services</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        <ServiceThumbnail
          title="Full-Stack"
          description="e-commerce, saas & ai agents"
          videosrc="/videos/fullstack-thumbnail.mp4"
          imgsrc="/videos/fullstack-thumbnail.png"
        />

        <ServiceThumbnail
          title="Mobile App"
          description="food, fashion, rental & more"
          videosrc="/videos/mobile-thumbnail.mp4"
          imgsrc="/videos/mobile-thumbnail.png"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        <ServiceThumbnail
          title="Blockchain"
          description="dapps, nfts, defi & wallets"
          videosrc="/videos/blockchain-thumbnail.mp4"
          imgsrc="/videos/blockchain-thumbnail.png"
        />

        <DummyCard />

      </div>

      <div className="text-md my-5 font-light flex gap-1">
        <span className="text-pink-500 font-semibold">pitch:</span>{" "}
        <span className="text-default-900 font-light">
          I&apos;m good at{" "}
          <span className="font-semibold">figuring things out</span>!
        </span>
      </div>
    </div>
  );
};

export default Services;
