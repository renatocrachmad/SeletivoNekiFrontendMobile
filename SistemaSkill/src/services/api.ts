import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com', // Substitua pela URL da sua API
});

export const login = (username: string, password: string) => {
  return api.post('/login', { username, password });
};

export const signup = (username: string, password: string) => {
  return api.post('/signup', { username, password });
};

export const getSkills = () => {
  return api.get('/skills');
};

export const addSkill = (skill: any) => {
  return api.post('/skills', skill);
};

export const deleteSkill = (id: string) => {
  return api.delete(`/skills/${id}`);
};

export const updateSkill = (id: string, level: string) => {
  return api.put(`/skills/${id}`, { level });
};
