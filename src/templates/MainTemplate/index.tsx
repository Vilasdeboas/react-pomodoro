import { Container } from '../../components/Container';
import { Countdown } from '../../components/Countdown';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { MainForm } from '../../components/MainForm';
import { Menu } from '../../components/Menu';
import './styles/global.css';
import './styles/theme.css';

type MainTemplateProps = {
    children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    );
}

export default MainTemplate;
