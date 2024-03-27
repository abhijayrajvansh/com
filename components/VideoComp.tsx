function VideoComponent() {

  return (
    <div>
        <video muted autoPlay loop controls={false} className="w-full rounded-xl mb-5 h-[250px] sm:h-[450px] border-2 border-default-200 object-center object-cover ">
          <source src="/abhijayatwork.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default VideoComponent;
