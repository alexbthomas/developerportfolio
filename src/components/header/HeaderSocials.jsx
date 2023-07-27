import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><GrLinkedin/></a>
        <a href='https://github.com' target="_blank"><GrGithub/></a>
    </div>
  )
}

export default HeaderSocials