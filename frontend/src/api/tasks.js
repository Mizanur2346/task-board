import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
});

export const getTasks = () =>
  axios.get(`${API_BASE}/tasks/`, authHeaders());

export const createTask = (data) =>
  axios.post(`${API_BASE}/tasks/`, data, authHeaders());

export const updateTask = (id, data) =>
  axios.patch(`${API_BASE}/tasks/${id}/`, data, authHeaders());

export const deleteTask = (id) =>
  axios.delete(`${API_BASE}/tasks/${id}/`, authHeaders());