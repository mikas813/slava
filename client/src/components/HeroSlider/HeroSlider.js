import img1 from '../../images/image1.jpg'
import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'
import img4 from '../../images/image4.jpg'
import './HeroSlider.scss'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const HeroSlider = () => {

  const [index, set] = useState(0)
  const slides = [
    { id: 0, url: img1 },
    { id: 1, url: img3 },
    { id: 2, url: img4 },
    { id: 3, url: img2 },
  ]
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => {
    void setInterval(() => set(state => (state + 1) % 4), 4000)
  }, [])

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}

export default HeroSlider