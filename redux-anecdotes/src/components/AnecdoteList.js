import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote, vote, votes }) => {
  return (
    <div>
      <div>{anecdote}</div>
      <div>
        has {votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  );
};

function AnecdoteList() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const orderedAnecdotes = [...anecdotes].sort(
    (a, b) => b.votes - a.votes
  );
  return (
    <div>
      {orderedAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          vote={() => dispatch(addVote(anecdote.id))}
          votes={anecdote.votes}
          anecdote={anecdote.content}
        />
      ))}
    </div>
  );
}

export default AnecdoteList;
