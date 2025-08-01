import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes.js'; // verifica se o nome do arquivo está mesmo "notes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Use as rotas para notas
app.use('/api', notesRoutes);

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rota teste
app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

// Rota para criar uma nova nota
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

