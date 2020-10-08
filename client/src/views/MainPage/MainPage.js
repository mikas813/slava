import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Auxilary} from '../../hoc/Auxilary'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'

const MainPage = () => {
  return (
    <Auxilary>
      <Header/>
      <HeroSlider/>
      <ContentWrapper>
      </ContentWrapper>
      <Footer/>
    </Auxilary>
  )
}

export default MainPage
