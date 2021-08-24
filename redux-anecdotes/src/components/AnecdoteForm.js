import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import {
  addNotification,
  endNotification,
} from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addNote = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdote(anecdote));
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
