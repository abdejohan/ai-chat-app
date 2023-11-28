import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/index.scss';
import Typography from './pages/Typography';
import NotFound from './pages/NotFound';
import Game from './pages/Game';
import { StoreContextProvider } from './contexts/Store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContextProvider>
    <BrowserRouter>
      {false && (
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/typography">Typography</a>
            </li>
          </ul>
        </nav>
      )}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/typography" Component={Typography} />
        <Route path="/game" Component={Game} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </StoreContextProvider>,
);
