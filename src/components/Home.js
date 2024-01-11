import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="absolute w-[100%] h-[100%] flex justify-center items-center">
        <div className="text-6xl font-extrabold text-white bg-gradient-to-b from-black">
          Unlimited movies, TV shows and more
        </div>
      </div>
      <div className="absolute w-[100%] px-36 py-2 flex justify-between bg-gradient-to-b from-black">
        <div>
          <img
            className="w-52"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className="my-auto">
          <Link to="/login">
            <button className="px-4 py-2 bg-red-600 text-white text-lg rounded-lg font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background"
      />
    </div>
  );
};

export default Home;
