import React from 'react'
import {SocialNetworks} from '../SocialNetworks/SocialNetworks'
import {ContactForm} from '../ContactForm/ContactForm'
import {Title} from '../Title/Title'
import {Text} from '../Text/Text'

export const Contacts = () => {
  return (
    <div className="contacts_wrapper">

      <Title title="Contact Us"/>
      <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur corporis culpa cupiditate eveniet ex fugiat, iure laborum maiores necessitatibus nihil optio, perferendis perspiciatis provident quas recusandae repellendus sit voluptatem?"/>

      <SocialNetworks/>

      <Title title="Get in touch"/>

      <ContactForm/>

      <Text text="or"/>

      <a href="mailto:slavamiki@icloud.com">slavamiki@icloud.com</a>

    </div>
  )
}