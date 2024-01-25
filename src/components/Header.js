import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  });

  const langKey = useSelector((store) => store.config.lang);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute md:px-8 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
      <img className="w-44 h-16 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex mx-3 my-3 md:m-4 justify-between">
          <div className="flex">
            {showGptSearch && (
              <select
                className="rounded-lg font-semibold px-2"
                onChange={handleLanguageChange}
                value={langKey}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="mx-2 md:mx-5 px-2 md:px-3 bg-white text-blue-700 font-semibold rounded-lg text-md"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? lang[langKey].movies : "GPT Search"}
            </button>
          </div>
          <div className="flex">
            <img
              className="w-9 h-9 rounded-lg"
              alt="usericon"
              src={user.photoURL}
            />
            <button
              className="font-semibold text-md text-white rounded-lg md:mr-2 ml-2 px-2 md:px-3 bg-red-600"
              onClick={handleSignOut}
            >
              {showGptSearch ? lang[langKey].signOut : "Sign Out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
