import { Container } from './components/Container';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';

function App() {
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

            <Container>
                <Form />
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}

export default App;
