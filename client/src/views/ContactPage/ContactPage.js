import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Auxilary} from '../../hoc/Auxilary'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import './ContactPage.scss'
import {Contacts} from '../../components/Contacts/Contacts'


const ContactPage = () => {
  return (
    <Auxilary>
      <Header/>
      <ContentWrapper>
        <Contacts/>
      </ContentWrapper>
      <Footer/>
    </Auxilary>
  )
}

export default ContactPage
