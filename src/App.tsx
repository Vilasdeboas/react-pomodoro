import { Container } from './components/Container';
import { Countdown } from './components/Countdown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';

function App() {
    //console.log('Hello World!');

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <Countdown />
            </Container>

            <Container>FOOTER</Container>
        </>
    );
}

export default App;
