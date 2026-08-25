import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API radi' });
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});
