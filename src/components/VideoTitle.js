const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4 text-justify">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button className="px-2 md:px-6 py-1 md:py-2 bg-white text-black text-sm md:text-lg font-semibold rounded hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block px-6 py-2 mx-3 bg-gray-400 text-lg font-semibold rounded bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
