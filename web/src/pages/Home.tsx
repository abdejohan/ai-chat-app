import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [language, setLanguage] = useState('Spanish');
  const [subject, setSubject] = useState('sports');
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const startGame = async () => {
    try {
      const response = await fetch(`${API_URL}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'user',
          content: `name: ${name}, subject: ${subject}, language: ${language}`,
        }),
      });
      const startResponse = await response.json();
      return navigate('/game', { state: startResponse });
    } catch (error) {
      return null;
    }
  };

  return (
    <main className="page">
      <h1>Home page</h1>
      <div style={{ margin: '50px 0px' }}>
        <p>Welcome, Looking to improve your language skills?</p>
        <p>We have what you are looking for</p>
      </div>

      <div style={{ margin: '50px 0px', display: 'flex', flexFlow: 'column nowrap' }}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
      <button onClick={() => startGame()}>Start Game</button>
    </main>
  );
};

export default Home;
