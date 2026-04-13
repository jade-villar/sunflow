import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { editHabit, fetchAllHabits, fetchHabit, postHabit, removeHabit } from "../services/habitServices";

const HabitContext = createContext();

export const useHabit = () => {
  return useContext(HabitContext);
};

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState(null);
  const [habitsLoading, setHabitsLoading] = useState(false);
  const [habitLoading, setHabitLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const deleteTimeoutRef = useRef(null);

  // Get all habits
  const getAllHabits = useCallback(async () => {
    setHabitsLoading(true);
    try {
      const res = await fetchAllHabits();
      setHabits(res.data);
    } catch (err) {
      toast.error(err);
    } finally {
      setHabitsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllHabits();
  }, [getAllHabits]);

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
      await postHabit({ title, description, categoryId, frequency, scheduledDays });
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
      await editHabit({ id, title, description, categoryId, frequency, scheduledDays });
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

  // Delete habit with undo
  const deleteHabitWithUndo = async (habit) => {
    try {
      setHabits(habits?.filter((h) => h.id !== habit.id));

      const timeout = setTimeout(async () => {
        try {
          await removeHabit({ id: habit.id });
        } catch (err) {
          toast.error(err);
          setHabits((prev) => [habit, ...prev]);
        }
      }, 6000);

      deleteTimeoutRef.current = timeout;

      toast.success(`${habit.title} deleted`, {
        action: {
          label: "Undo",
          onClick: () => undoDelete(habit),
        },
        duration: 5000,
      });
    } catch {
      toast.error("Failed to delete habit");
      setHabits((prev) => [habit, ...prev]);
    }
  };

  // Undo delete
  const undoDelete = (habit) => {
    clearTimeout(deleteTimeoutRef.current);
    setHabits((prev) => [habit, ...prev]);
  };

  return (
    <HabitContext.Provider
      value={{ habits, habit, habitsLoading, habitLoading, actionLoading, getAllHabits, getHabit, addHabit, updateHabit, deleteHabit, deleteHabitWithUndo, undoDelete }}
    >
      {children}
    </HabitContext.Provider>
  );
};
