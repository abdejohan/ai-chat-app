import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Oops? seems like you got lost.</h1>
      <div>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
