import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="page">
    <h1>Oops? seems like you got lost.</h1>
    <div>
      <Link to="/">Return Home</Link>
    </div>
  </main>
);

export default NotFound;
