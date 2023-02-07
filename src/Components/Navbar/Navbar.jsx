import React from 'react'
import {BiMovie} from 'react-icons/bi'
import {BsFillGridFill,BsFillBookmarkFill} from 'react-icons/bs'
import {HiFilm} from 'react-icons/hi'
import {RiMovie2Fill} from 'react-icons/ri'
import './Navbar.scss'
import face from '../../Assets/face.jpg'

const Navbar = () => {
  return (
    <div className="app__navbar">

        <div className="app__navbar-logo">
            <BiMovie/>
        </div>

        <div className="app__navbar-sections">
            <BsFillGridFill/>
            <HiFilm/>
            <RiMovie2Fill/>
            <BsFillBookmarkFill/>
        </div>
        
        <div className="app__navbar-image">
            <img src={face} alt=""/>
        </div>
        
    </div>
  )
}

export default Navbar