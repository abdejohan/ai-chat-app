import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <main className="page">
      <h1>Lets chat!</h1>
      <div>
        <Link to="/">Start Game</Link>
      </div>
    </main>
  );
};

export default Game;
