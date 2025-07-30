// src/components/NotesList.jsx
import React from 'react';

const NotesList = () => {
  const notes = [
    { id: 1, title: 'Note 1', content: 'This is the first note' },
    { id: 2, title: 'Note 2', content: 'This is the second note' },
  ];

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;

