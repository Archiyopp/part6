import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import {
  addNotification,
  endNotification,
} from '../reducers/notificationReducer';
import { createNew } from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addNote = async (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await createNew(anecdote);
    dispatch(createAnecdote(newAnecdote));
    dispatch(addNotification(anecdote));
    setTimeout(() => dispatch(endNotification()), 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
