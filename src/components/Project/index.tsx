import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from './style'

import { FaGithub, FaShare } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { user_data } from '@/utils/userData'
import { Text } from '@/styles/Text'


interface ReposType {
	id: number
	name: string
	language: string
	description: string
	git_url: string
	homepage: string
}

const Project = (): JSX.Element => {

  const [ repositories, setRepositories ] = useState<ReposType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${user_data.github_user}/repos`
      )

      const json = await data.json()

      setRepositories(json)

      if (!data.ok) {
        throw data
      }

      return json
    };
    fetchData()
  }, [])

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
            { repository.name }
          </Text>

          {
		  repository.language && (
            <ProjectStack>
              <Text type="body2">Languages:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )
		  }

          <Text type="body1" color="grey2">
            { repository.description }
          </Text>
          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.git_url}>
              <FaGithub /> Github Code
            </ProjectLink>
            {
			repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Application
              </ProjectLink>
            )
			}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  )
}

export { Project }
