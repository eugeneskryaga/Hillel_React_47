import axios from "axios";
import type { Habit } from "../types/types";

const BASE_URL = "https://69e6136cce4e908a155eebe7.mockapi.io/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getHabits = async () => {
  const { data } = await api<Habit[]>("/habits");
  return data;
};

export const removeHabit = async (id: Habit["id"]) => {
  const { data } = await api.delete<Habit>(`habits/${id}`);
  return data;
};

export const addHabit = async (habit: Habit) => {
  const { data } = await api.post<Habit>("/habits", habit);
  return data;
};

export const toggleHabit = async (habit: Habit) => {
  const { data } = await api.put<Habit>(`/habits/${habit.id}`, {
    completedToday: !habit.completedToday,
  });
  return data;
};
