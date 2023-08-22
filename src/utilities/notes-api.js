// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function addNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function fetchUserNotes() {
  return sendRequest(BASE_URL);
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}