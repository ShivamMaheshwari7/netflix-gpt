import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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
    <div className="absolute px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44 h-16" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex m-4">
          {showGptSearch && (
            <select
              className="rounded-lg font-semibold px-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  selected={lang.identifier === langKey}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-5 px-3 bg-white text-blue-700 font-semibold rounded-lg text-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Movies" : "GPT Search"}
          </button>
          <img
            className="w-9 h-9 rounded-lg"
            alt="usericon"
            src={user.photoURL}
          />
          <button
            className="font-semibold text-md text-white rounded-lg mr-5 ml-2 px-3 bg-red-600"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
