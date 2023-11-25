import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Typograpghy from './pages/Typography.tsx';
import NotFound from './pages/NotFound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
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
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/typography" Component={Typograpghy} />
      <Route path="/*" Component={NotFound} />
    </Routes>
  </BrowserRouter>,
);
