import express, { Request, Response, Application } from 'express';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import config from './config';
import { formatResponse, startGame } from './lib/markup';

const messages: ChatCompletionMessageParam[] = [
  {
    role: 'user',
    content: startGame,
  },
];

const initializeChat = async () => {
  const newOpenai = new OpenAI({ apiKey: config.API_KEY });
  const completion = await newOpenai.chat.completions.create({
    messages,
    model: 'gpt-3.5-turbo',
  });
  messages.push(completion.choices[0].message);
};

initializeChat();

const app: Application = express();
app.use(express.json());

app.post('/api', async (req: Request, res: Response) => {
  try {
    const { details } = req.body;
    messages.push({ role: 'user', content: formatResponse(details) });
    const newOpenai = new OpenAI({ apiKey: config.API_KEY });
    const completion = await newOpenai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    });
    messages.push(completion.choices[0].message);
    res.json(completion.choices[0].message);
  } catch (error) {
    console.log(error);

    res.status(404).send();
  }
});

app.listen(config.PORT, () => {
  console.log(`Server is Fire at http://localhost:${config.PORT}`);
});
