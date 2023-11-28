import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

export const difficultyLevels = {
  easy: 'Your friend is very new to {language} so keep your respond very short  and easy to understand. Ask very simple basic question that even a child could answer.',
  intermediate:
    'Your friend is intermediate level in {language} so keep your respond very short  and easy to understand. Ask very simple basic questions.',
  expert: 'Your friend is almost fluent in {language}, Try to keep your responses short.',
};

const Home = () => {
  const [language, setLanguage] = useState('Spanish');
  const [subject, setSubject] = useState('sports');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState(difficultyLevels.easy);

  const startGame = async () => {
    try {
      const response = await fetch(`${API_URL}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'user',
          content: `name: ${name}, subject: ${subject}, language: ${language}, difficulty: ${difficulty}`,
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
          autoComplete="off"
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

        <label htmlFor="difficulty">Select difficulty</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="form__input-select"
        >
          <option value={difficultyLevels.easy}>Easy</option>
          <option value={difficultyLevels.intermediate}>Intermediate</option>
          <option value={difficultyLevels.expert}>Expert</option>
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
