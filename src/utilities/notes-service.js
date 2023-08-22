import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    try {
        const note = await notesAPI.addNote(noteData);
        return note;
    } catch (err) {
        throw err;
    }
}

export async function fetchAllNotes() {
    try {
        const notes = await notesAPI.fetchUserNotes();
        return notes;
    } catch (err) {
        throw err;
    }
}

export async function removeNote(noteId) {
  try {
      await notesAPI.deleteNote(noteId);
  } catch (err) {
      throw err;
  }
}