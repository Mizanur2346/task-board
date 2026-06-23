import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

export const getTasks = () =>
  axios.get(`${API_BASE}/tasks/`);

export const createTask = (data) =>
  axios.post(`${API_BASE}/tasks/`, data);

export const updateTask = (id, data) =>
  axios.patch(`${API_BASE}/tasks/${id}/`, data);

export const deleteTask = (id) =>
  axios.delete(`${API_BASE}/tasks/${id}/`);