import img from '@/public/static/img/background/dots.svg'
import { styled } from '@/styles/stitches.config'
import { Button } from '@/styles/Buttons'
import { Flex } from '@/styles/Global'


const Header = styled('header', {
  backgroundColor: "$brand1",
  padding: "12rem 0 8rem 0",
  backgroundImage: `url(${ img })`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom 1rem right 1rem",
  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
})

const HeaderContent = styled('div', {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
})

const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  "@mobile": {
    flexDirection: "column",
    [`& ${ Button }`]: {
      width: "100%",
    },
  },
})

const StackSection = styled('section', {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
})

const StackCards = styled('div', {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
})

const ProjectsArea = styled('section', {
  padding: "4rem 0 8rem 0",
})

const ProjectsAreaSocialMediaMessage = styled('aside', {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
})

const ProjectsAreaContent = styled('div', {
  width: "60%",
  paddingLeft: "4rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
})

const ProjectAreaWrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
})

export { Header, HeaderContent, HeaderButtonsArea, StackSection, StackCards, ProjectsArea, ProjectsAreaSocialMediaMessage, ProjectsAreaContent, ProjectAreaWrapperColumns }
