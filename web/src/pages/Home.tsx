import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        Welcome, Start Chat
        <Link to="/game">Start Game</Link>
      </div>
    </div>
  );
};

export default Home;
