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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
