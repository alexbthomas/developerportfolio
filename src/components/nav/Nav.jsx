import React from 'react'
import './nav.css'
import { GoHomeFill } from 'react-icons/go'
import { HiDocumentText } from 'react-icons/hi'
import {MdWork} from 'react-icons/md'
import {GiOpenFolder} from 'react-icons/gi'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHomeFill/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiDocumentText/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiOpenFolder/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav