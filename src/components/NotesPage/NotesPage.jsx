import React, { useState, useEffect } from 'react';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import { fetchAllNotes } from '../../utilities/notes-service';
import { removeNote } from '../../utilities/notes-service';

export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  async function handleDelete(id) {
    try {
      await removeNote(id);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  useEffect(() => {
    async function getNotes() {
      const userNotes = await fetchAllNotes();
      setNotes(userNotes);
    }
    getNotes();
  }, []);

  const sortedNotes = [...notes].sort((a, b) => {
    if (isAscending) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div>
      <AddNoteForm user={user} notes={notes} setNotes={setNotes} />
      <button onClick={() => setIsAscending(!isAscending)}>
        {isAscending ? 'Newest Comments First' : 'Oldest Comments First'}
      </button>
      <div className="NotesContainer">
        {sortedNotes.length === 0 ? (
          <p>No Notes Yet!</p>
        ) : (
          sortedNotes.map(note => (
            <div className="NoteCard" key={note._id}>
              <p><strong>{note.text}</strong></p>
              <p>{new Date(note.createdAt).toLocaleString()}</p>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
