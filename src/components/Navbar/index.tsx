import { user_data } from '@/utils/userData'
import { useState } from 'react'
import useMedia from 'use-media'

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from './style'

import { FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Button } from '@/styles/Buttons'
import { Container } from '@/styles/Global'


export interface MenuButtonOpen {
	open: Boolean
	setOpen: (value: Boolean) => void
}

const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" })

  document.title = user_data.name_user

  const [open, setOpen] = useState(false)

  const OpenMenu = () => {
    setOpen(!open)
  }

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={`https://github.com/${ user_data.github_user }.png`}
              alt={ user_data.name_user }
              title={ user_data.name_user }
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>{user_data.name_user}</LogoTipoText>
          </LogoTipo>
          {
          isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={ !open ? 'Abrir Menu' : 'Fechar Menu' }
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )
          }
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      {user_data.whatsapp_number && (
        <Button
          type="primary"
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+55${ user_data.whatsapp_number }&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
        >
          Talk on whatsapp
        </Button>
      )}

      {user_data.github_user && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${ user_data.github_user }`}
        >
          <FaGithub />
        </Button>
      )}

      {user_data.linkedin_user && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${ user_data.linkedin_user }`}
        >
          <FaLinkedinIn />
        </Button>
      )}
    </NavbarLinks>
  )
}

export { NavBar }
