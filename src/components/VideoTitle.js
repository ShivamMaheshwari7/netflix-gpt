const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-justify">{overview}</p>
      <div>
        <button className="px-6 py-2 bg-white text-black text-lg font-semibold rounded hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="px-6 py-2 mx-3 bg-gray-400 text-lg font-semibold rounded bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
