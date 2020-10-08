import React, {useState} from 'react'
import './Header.scss'
import Container from '../Container/Container'
import NavLinks from '../NavLinks/NavLinks'
import {Link} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'


const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const maskTransitions = useTransition( menuOpened, null, {
    from: {position: 'fixed', opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  } );
  const transitions = useTransition(menuOpened, null, {
    from: {opacity: 0},
    enter: {zIndex: -1, opacity: 1},
    leave: {opacity: 0}
  })
  
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
    if (!menuOpened) {
      document.querySelector('.mob_menu').classList.replace('mob_menu', 'mob_menu-opened')
    } else {
      document.querySelector('.mob_menu-opened').classList.replace('mob_menu-opened', 'mob_menu')
    }
  }


  return (
    <header className="header">

      <Container>

        <div className="logo">
          <Link to="/">Iaroslav Lasiichuk<span>photografer</span></Link>
        </div>

        {maskTransitions.map( ({item, key, props}) =>
          item &&
          <animated.div
            className='mask-transition'
            key={key}
            style={props}
            onClick={() => toggleMenu()}
          >️</animated.div>
        )}


        {
          transitions.map(({item, key, props}) =>
            item &&
            <animated.div key={key} style={props} >
              <NavLinks/>
            </animated.div>
          )
        }

        <div
          onClick={toggleMenu}  
          className='mob_menu'/>

      </Container>
    </header>
  )
}

export default Header
