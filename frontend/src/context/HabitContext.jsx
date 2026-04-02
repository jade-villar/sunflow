import { createContext, useContext, useEffect, useState } from "react";
import { editHabit, fetchAllHabits, fetchHabit, postHabit, removeHabit } from "../services/habitService";

const HabitContext = createContext();

export const useHabit = () => {
  return useContext(HabitContext);
};

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState([]);

  const getAllHabits = async () => {
    const res = await fetchAllHabits();
    setHabits(res);
  };

  useEffect(() => {
    const load = async () => {
      await getAllHabits()
    }

    load()
  }, []);

  const getHabit = async ({ id }) => {
    const res = await fetchHabit({ id });
    setHabit(res);
  };

  const addHabit = async ({ title, description, categoryId, frequency, scheduledDays }) => {
    await postHabit({ title, description, categoryId, frequency, scheduledDays });
    getAllHabits();
  };

  const updateHabit = async ({ id, title, description, categoryId, frequency, scheduledDays }) => {
    await editHabit({ id, title, description, categoryId, frequency, scheduledDays });
    getAllHabits();
  };

  const deleteHabit = async ({ id }) => {
    await removeHabit({ id });
  };

  return (
    <HabitContext.Provider value={{ habits, habit, getHabit, addHabit, updateHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
