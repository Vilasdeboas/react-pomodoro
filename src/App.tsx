import './styles/global.css';
import './styles/theme.css';
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    );
}

export default App;
