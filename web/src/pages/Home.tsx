import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [language, setLanguage] = useState('Language');
  const [subject, setSubject] = useState('');
  return (
    <main className="page">
      <h1>Home page</h1>
      <div style={{ margin: '50px 0px' }}>
        <p>Welcome, Looking to improve your language skills?</p>
        <p>We have what you are looking for</p>
      </div>

      <div style={{ margin: '50px 0px', display: 'flex', flexFlow: 'column nowrap' }}>
        <label htmlFor="bootcamp">Select language</label>
        <select
          id="bootcamp"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="form__input-select"
        >
          <option value="">Language</option>
          <option value="swedish">Swedish</option>
          <option value="spanish">Spanish</option>
        </select>

        <label htmlFor="subject">Select a subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>
      {/* <button
        onClick={() =>
          console.log({
            Lang: language,
            Subject: subject,
          })
        }
      >
        Start Game
      </button> */}
      <Link to="/game">Start Game</Link>
    </main>
  );
};

export default Home;
