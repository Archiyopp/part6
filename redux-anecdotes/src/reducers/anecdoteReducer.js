// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

import {
  createNew,
  getAll,
  getById,
  update,
} from '../services/anecdotes';

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };
// const initialState = anecdotesAtStart.map(asObject);

export const addVote = (id) => {
  return async (dispatch) => {
    const anecdote = await getById(id);
    const newAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    await update(id, newAnecdote);
    dispatch({
      type: 'VOTE',
      id,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await createNew(content);
    dispatch({
      type: 'ADD',
      anecdote,
    });
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'VOTE': {
      return state.map((anecdote) => {
        if (anecdote.id === action.id) {
          return { ...anecdote, votes: anecdote.votes + 1 };
        }
        return anecdote;
      });
    }
    case 'ADD': {
      return [...state, action.anecdote];
    }
    case 'INIT_ANECDOTES': {
      return action.data;
    }
    default:
      return state;
  }
};

export default anecdoteReducer;
