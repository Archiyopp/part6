import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import {
  endNotification,
  voteNotification,
} from '../reducers/notificationReducer';

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
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (!filter) {
      return anecdotes;
    }
    return anecdotes.filter((anecdote) =>
      anecdote.content.includes(filter)
    );
  });
  const orderedAnecdotes = [...anecdotes].sort(
    (a, b) => b.votes - a.votes
  );
  const vote = (id) => {
    dispatch(addVote(id));
    const anec = orderedAnecdotes.find(
      (anecdote) => anecdote.id === id
    );
    dispatch(voteNotification(anec.content));
    setTimeout(() => dispatch(endNotification()), 5000);
  };
  return (
    <div>
      {orderedAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          vote={() => vote(anecdote.id)}
          votes={anecdote.votes}
          anecdote={anecdote.content}
        />
      ))}
    </div>
  );
}

export default AnecdoteList;
