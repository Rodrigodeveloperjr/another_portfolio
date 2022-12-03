// Styles
import { Container } from '@/styles/Global'
import { Button } from '@/styles/Buttons'
import { Text } from '@/styles/Text'

// Components
import { Project } from '@/components/Project'
import { Stack } from '@/components/Stack'

// Data
import { stack_data } from '@/utils/stackData'
import { user_data } from '@/utils/userData'

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from './style'


const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Creating experiences through technology{" "}
            </Text>
            <Text type="body1" color="grey6">
              I'm a programming student at Kenzie Academy, I attended
              of various projects solving high-level problems and
              developing skills.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projects
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Technologies
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Tools I master
          </Text>
          <StackCards>
            {stack_data.map((stack, index) => (
              <Stack key={ index } title={ stack.title } icon={ stack.img } />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Shall we exchange an idea?
              </Text>
              <Text as="p" type="body1" color="grey2">
                On linkedIn I'm always sharing my daily processes
                to develop these projects and I am willing to exchange
                some ideas over there
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${ user_data.linkedin_user }/`}
              >
                Access profile on LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projects
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                 Originality and{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedication
                </Text>{" "}
                  in every detail
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  )
}

export { Home }
