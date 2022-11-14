import axios from "axios";

const API_URL = "/api/goals/";
const createGoal = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, data, config);
  return response.data;
};

const getGoals = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      user: { id },
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const deleteGoal = async (postId, userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      user: { id: userId },
    },
  };
  const response = await axios.delete(API_URL + postId, config);
  console.log(response.data);
  return response.data;
};
export const goalService = { createGoal, getGoals, deleteGoal };
