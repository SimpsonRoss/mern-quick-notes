import { useState } from 'react';
import { createNote } from '../../utilities/notes-service';
import './AddNoteForm.css';


export default function AddNoteForm({ user, notes, setNotes }) {
    const [noteText, setNoteText] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const newNote = {
          text: noteText,
          user: user._id
      };
      
      try {
          const addedNote = await createNote(newNote);
          // Update the notes state with the new note
          setNotes([addedNote, ...notes]);
          setNoteText(''); // Clear the form
      } catch (err) {
        console.log("Error submitting form:", err.message);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
          <textarea 
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Add your note here..."
          />
          <button className='Adding' type="submit">Add Note</button>
          <br />
      </form>
    );
}
