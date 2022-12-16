import React from 'react'
import Vector from "../assets/img/landingPage/pic.png";
import Footer from '../components/landingPage/Footer';
import Login from "../components/landingPage/Login";
import Navbar from '../components/landingPage/Navbar';

function LandingPage1(props) {
  return (
    <>
  <div className="text-gray-400 body-font h-full">
          <Navbar/>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img className="object-cover object-center" alt="hero" src={Vector}/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
         <Login
            setToastShow={props.setToastShow}
            settoastCondition={props.settoastCondition}
          ></Login>
      </div>
    </div>
    <Footer/>
  </div>
  </>
  )
}

export default LandingPage1