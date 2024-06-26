import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const sessionUser = useSelector(state => state.session.user)
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const profileRedirectHandler = () => {
    if (!user) {
      window.alert("You must be logged in to access your profile")
    }
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div
        className="profile-icon-button"
        onClick={openMenu}
      >
        <i className="fa-sharp fa-solid fa-user"
          style={{ fontSize: '1.5rem', color: '#C69749', backgroundColor: '#282A3A', padding: '0', cursor: 'pointer' }}
        ></i>
      </div>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <NavLink exact to='/developer/portal'
              style={{ color: 'white' }}
            >
              Developer Portal
            </NavLink>
            <li>

            <NavLink exact to='/writer/portal'
            style={{ color: 'white' }}
            >
              Writer Portal
            </NavLink>
            </li>

            <li>

              <NavLink exact to='/profile'
                style={{ color: 'white' }}
              >
                Profile
              </NavLink>
            </li>
            <li>{user.username}</li>
            <li>{user.email}</li>

            <li>
              <button onClick={handleLogout}
              style={{padding: '.75rem', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold'}}
              >Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>

  );
}

export default ProfileButton;
