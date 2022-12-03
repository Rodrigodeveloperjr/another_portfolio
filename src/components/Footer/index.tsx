import { Footer as FooterWrapper } from './style'
import { Container } from '@/styles/Global'
import { FaAngleUp } from 'react-icons/fa'
import { Button } from '@/styles/Buttons'
import { Text } from '@/styles/Text'


const Footer = (): JSX.Element =>{
    return (
        <FooterWrapper>
            <Container>
                <Button onClick={() => { window.scrollTo(0,0) }} aria-label="Voltar para o topo do site" type="circle"><FaAngleUp/></Button>
                <Text type="body1" color="grey5">✋ Thanks for accessing!</Text>
            </Container>
        </FooterWrapper>
    )
}

export { Footer }
