import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../../components/NotesPage/NotesPage'

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log("User object:", user);

  return (
    <main>
      { user ? 
      <>
        <h1>NOTE-MASTER 3000</h1>
        <NavBar user={user.name} setUser={setUser} />
        <NotesPage user={user} />
      </>
      : 
      <AuthPage setUser={setUser} /> }
    </main>
  );
}