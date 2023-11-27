import express, { Request, Response, Application } from 'express';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import cors from 'cors';
import config from './config';
import { systemMessage } from './lib/markup';

const messages: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: systemMessage,
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

const app: Application = express();
app.use(express.json());
app.use(cors());
initializeChat();
const newOpenai = new OpenAI({ apiKey: config.API_KEY });

app.post('/api', async (req: Request, res: Response) => {
  try {
    const message = req.body;
    messages.push(message);
    const completion = await newOpenai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    });
    messages.push(completion.choices[0].message);
    res.json(completion.choices[0].message);
  } catch (error) {
    res.status(404).send();
  }
});

app.post('/api/start', async (req: Request, res: Response) => {
  console.log('heheheh');

  try {
    const message = req.body;
    messages.push(message);
    const completion = await newOpenai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    });
    messages.push(completion.choices[0].message);
    res.json(completion.choices[0].message);
  } catch (error) {
    res.status(404).send();
  }
});

app.listen(config.PORT, () => {
  console.log(`Server is Fire at http://localhost:${config.PORT}`);
});
