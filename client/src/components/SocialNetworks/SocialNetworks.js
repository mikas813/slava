import {FacebookIcon, InstagramIcon, YoutubeIcon} from '../../IconsSvg'
import React from 'react'
import {Link} from 'react-router-dom'
import './SocialNetworks.scss'


export const SocialNetworks = () => {
  return (
    <ul className="social_network-links">

      <li>
        <a target="_blank"
           rel="noopener noreferrer"
           href="https://instagram.com/slavalasiychuk?igshid=rvivm09cjvhg">
          <InstagramIcon/>
        </a>

      </li>

      <li>
        <a target="_blank"
           rel="noopener noreferrer"
           href="https://www.facebook.com/search/top?q=slava%20lasiychuk">
          <FacebookIcon/>
        </a>
      </li>

      <li>
        <Link to="/contacts">
          <YoutubeIcon/>
        </Link>
      </li>

    </ul>
  )
}