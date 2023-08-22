const Note = require('../../models/note');

module.exports = {
  createNote,
  getAllNotesForUser,
  editNote,
  deleteNote,
};

async function createNote(req, res) {
  const { text } = req.body;
  const user = req.user._id; 

  try {
      const note = new Note({ text, user });
      await note.save();
      res.status(201).json(note);
  } catch (err) {
      res.status(500).json({ error: 'Failed to create note' });
  }
};

async function getAllNotesForUser(req, res) {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: `Failed to fetch notes: ${err.message}` });
  }
}


async function  editNote(req, res) {
  
}

async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
}
