import { styled } from '../../styles/stitches.config'
import { Flex, Container } from '../../styles/Global'
import { Button } from '../../styles/Buttons'


const Navbar = styled('nav', {
  background: "$mode",
  borderBottom: "2px solid $grey4",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
        flexDirection: "column"
    },
  },
})

const LogoTipo = styled(Flex, {
  alignItems: "center",
})

const LogoTipoImage = styled('img', {
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  }
})

const LogoTipoText = styled('span', {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey1",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  }
})

const NavbarLinks = styled(Flex, {
  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "$3",
    [`& ${Button}:nth-child(1)`]: {
      width: "100%",
      order: "3",
    },
    [`& ${Button}`]: {
      width: "48%",
      order: "1",
    },
  },
})

const NavbarMobileArea = styled("div", {
   display: "flex",
   justifyContent: "space-between"
})

export { Navbar, LogoTipo, LogoTipoImage, LogoTipoText, NavbarLinks, NavbarMobileArea }
