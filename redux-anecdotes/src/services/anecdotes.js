import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getById = async (id) => {
  const anecdotes = await getAll();
  return anecdotes.find((anecdote) => anecdote.id === id);
};

export const createNew = async (content) => {
  const anecdote = {
    content,
    votes: 0,
  };
  const response = await axios.post(baseUrl, anecdote);
  return response.data;
};

export const update = async (id, object) => {
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};
