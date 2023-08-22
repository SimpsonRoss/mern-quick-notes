const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.post('/', notesCtrl.createNote);

router.get('/', notesCtrl.getAllNotesForUser);

// router.put('/:id', notesCtrl.editNote);

router.delete('/:id', notesCtrl.deleteNote);

module.exports = router;