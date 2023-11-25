import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="page">
      <h1>Home page</h1>
      <div>
        Welcome, Start Chat
        <Link to="/game">Start Game</Link>
      </div>
    </main>
  );
};

export default Home;
