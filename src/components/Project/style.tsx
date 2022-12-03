import { styled } from '../../styles/stitches.config'
import { Flex } from '../../styles/Global'


const Project = styled('article', {
  	marginTop: "4rem",
})

const ProjectStack = styled(Flex, {
  	margin: "1.25rem 0 1.25rem 0",
})

const ProjectStackTech = styled('span', {
	backgroundColor: "$brand4",
	color: "$brand2",
	padding: "0  0.5rem",
	borderRadius: "$2",
})

const ProjectLink = styled("a", {
	fontSize: "1rem",
	color: "$grey2",
	fontWeight: "500",
	marginRight: "$2",
	display: "flex",
	alignItems: "center",
	lineHeight: "0",

	"&:hover":{
		color: "$grey1"
	},

	[`& svg`]: {
		marginRight: "$1"
	}
})

const ProjectLinks = styled(Flex, {
  	marginTop: "2.25rem",
})

export { Project, ProjectStack, ProjectStackTech, ProjectLink, ProjectLinks }
