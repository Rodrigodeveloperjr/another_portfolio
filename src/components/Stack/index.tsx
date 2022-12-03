import { IconType } from 'react-icons/lib'
import { Text } from '@/styles/Text'
import { StackCard } from './style'


interface StackProps {
	title: string
	icon: string | IconType
	key: number
}

const Stack = (
  	{ title, icon: Icon }: StackProps,
  	key: number
	): JSX.Element => {

  	const isString = typeof Icon === 'string'

	return (
    	<StackCard key={key}>
      	<Text>{title}</Text>
      	{
		isString ? (
        
			<img src={Icon} alt={title} title={title} height="84px" width="84px" />
      	
		) : (
        	
			<Icon size={84} />
      	)
	  }
    </StackCard>
  )
}

export { Stack }
