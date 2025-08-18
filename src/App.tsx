import { Container } from './components/Container';
import { Logo } from './components/Logo';
import './styles/global.css';
import './styles/theme.css';

function App() {
    //console.log('Hello World!');

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>MENU</Container>

            <Container>FORM</Container>

            <Container>FOOTER</Container>
        </>
    );
}

export default App;
