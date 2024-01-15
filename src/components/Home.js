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
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
    </div>
  );
};

export default Home;
