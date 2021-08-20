import React, { createContext, useEffect } from "react";
import "./Header.scss";
import { Home, Movie, SearchSharp, WatchLater } from "@material-ui/icons";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setUserSignOut,
} from "../features/user/userSlice";
import ToggleIcon from "./ToggleIcon";
import Button from "./Button";

function Header() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user; 
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        localStorage.setItem("name",user.displayName);
        history.push("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

     const logout = () => {
    auth.signOut().then(() => { 
      dispatch(setUserSignOut());
      localStorage.clear();
      history.push("/login");
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, []);


  return (
    <>
      <div className="header">
        <h3>
          <ToggleIcon />
          moviflix
        </h3>
        {!userName ? (
          <Button title="login" onclick={login} style={{ color: "white" , border: "2px solid white"}} />
        ) : (
          <>
            <div className="header_menu">
              <a className="links">
                <Home className="icon" />
                <span>Home</span>
              </a>
              <a className="links">
                <SearchSharp className="icon" />
                <span>Search</span>
              </a>
              <a className="links">
                <WatchLater className="icon" />
                <span>Watchlist</span>
              </a>
              <a className="links">
                <Movie className="icon" />
                <span>Movies</span>
              </a>
            </div>

            {/* <img className="user" src={userPhoto} alt={userName} /> */}

            <div className="loginbtncontainer">
              <Button
                title="Logout"
                onclick={logout}
                style={{ backgroundColor: "red", border:"2px solid white" }}
              />
              <h4>{userName}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}


export default Header;
