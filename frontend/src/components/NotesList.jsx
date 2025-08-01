// src/components/NotesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // Carregar as notas do backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error("There was an error fetching the notes!", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
 