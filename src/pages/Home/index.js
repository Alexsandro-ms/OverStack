import { Container } from './styles'
import { Link }from 'react-router-dom'

function Home(){
    return(
        <Container>
            <h1>Página Home</h1>
            <Link to="/signin">To login</Link>
        </Container>
    )
}

export default Home