import { createContext, useCallback, useContext, useState } from "react";
import { editHabit, fetchAllHabits, fetchHabit, postHabit, removeHabit } from "../services/habitServices";

const HabitContext = createContext();

export const useHabit = () => {
  return useContext(HabitContext);
};

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState([]);
  const [habitsLoading, setHabitsLoading] = useState(false);
  const [habitLoading, setHabitLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const getAllHabits = useCallback(async () => {
    setHabitsLoading(true);
    const res = await fetchAllHabits();
    setHabits(res);
    setHabitsLoading(false);
}, []);

  const getHabit = useCallback(async ({ id }) => {
    setHabitLoading(true);
    const res = await fetchHabit({ id });
    setHabit(res);
    setHabitLoading(false);
  }, []);

  const addHabit = async ({ title, description, categoryId, frequency, scheduledDays }) => {
    setActionLoading(true);
    await postHabit({ title, description, categoryId, frequency, scheduledDays });
    await getAllHabits();
    setActionLoading(false);
  };

  const updateHabit = async ({ id, title, description, categoryId, frequency, scheduledDays }) => {
    setActionLoading(true);
    await editHabit({ id, title, description, categoryId, frequency, scheduledDays });
    await getHabit({ id });
    setActionLoading(false);
  };

  const deleteHabit = async ({ id }) => {
    setActionLoading(true);
    await removeHabit({ id });
    await getAllHabits();
    setActionLoading(false);
  };

  return (
    <HabitContext.Provider
      value={{ habits, habit, habitsLoading, habitLoading, actionLoading, getAllHabits, getHabit, addHabit, updateHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
