import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

// Criar uma nova nota
router.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar a nota.' });
  }
});

// Listar todas as notas
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar as notas.' });
  }
});

// Editar uma nota
router.put('/notes/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ error: 'Nota não encontrada.' });
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao editar a nota.' });
  }
});

// Excluir uma nota
router.delete('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Nota não encontrada.' });
    }
    res.status(200).json({ message: 'Nota excluída com sucesso.' });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao excluir a nota.' });
  }
});

export default router;
