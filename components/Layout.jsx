import React from 'react'


import Header from "./header/Header";
import Poster from "./poster/Poster";
import Footer from "./footer/Footer";

const Layout = ({children, film}) => {
  if (!film) return (
    <>
      <div className="page-content">
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  )

  return (
    <>
      <Poster film={film}>
        <Header/>
      </Poster>
      <div className="page-content">
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout
