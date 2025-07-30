import { useState } from 'react';
import NotesList from './components/NotesList'; // Importando o componente de notas
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to Notes App</h1>
      <NotesList /> {/* Adicionando o componente de notas aqui */}
    </div>
  );
}

export default App;

