import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "sonner";
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

  // Get all habits
  const getAllHabits = useCallback(async () => {
    setHabitsLoading(true);
    try {
      const res = await fetchAllHabits();
      setHabits(res);
    } catch (err) {
      toast.error(err);
    } finally {
      setHabitsLoading(false);
    }
  }, []);

  // Get habit
  const getHabit = useCallback(async ({ id }) => {
    setHabitLoading(true);
    try {
      const res = await fetchHabit({ id });
      setHabit(res);
    } catch (err) {
      toast.error(err);
    } finally {
      setHabitLoading(false);
    }
  }, []);

  // Add habit
  const addHabit = async ({ title, description, categoryId, frequency, scheduledDays }) => {
    setActionLoading(true);
    try {
      await postHabit({
        title,
        description,
        categoryId,
        frequency,
        scheduledDays,
      });
      await getAllHabits();
      toast.success(`${title} added`);
    } catch (err) {
      toast.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  // Update habit
  const updateHabit = async ({ id, title, description, categoryId, frequency, scheduledDays }) => {
    setActionLoading(true);
    try {
      await editHabit({
        id,
        title,
        description,
        categoryId,
        frequency,
        scheduledDays,
      });
      await getHabit({ id });
      toast.success("Changes saved");
    } catch (err) {
      toast.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  // Delete habit
  const deleteHabit = async ({ id }) => {
    setActionLoading(true);
    try {
      await removeHabit({ id });
      await getAllHabits();
      toast.success("Habit deleted");
    } catch (err) {
      toast.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <HabitContext.Provider
      value={{ habits, habit, habitsLoading, habitLoading, actionLoading, getAllHabits, getHabit, addHabit, updateHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
