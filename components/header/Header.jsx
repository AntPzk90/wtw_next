import React from "react";
import Link from "next/link";

function Header() {
  const authorizationStatus = false;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="user-block">
        {authorizationStatus === `AUTH` ?
          <Link href='/'>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
          :
          <Link href='/log-in' className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  )
}

export default Header;
