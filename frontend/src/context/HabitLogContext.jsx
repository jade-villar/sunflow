import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "sonner";
import { complete, fetchWeeklyHabitLogs } from "../services/habitLogServices";

const HabitLogContext = createContext();

export const useHabitLog = () => {
  return useContext(HabitLogContext);
};

export const HabitLogProvider = ({ children }) => {
  const [weeklyLogs, setWeeklyLogs] = useState(null);

  // Get habit weekly logs
  const getHabitWeeklyLogs = useCallback(async ({ id }) => {
    try {
      const res = await fetchWeeklyHabitLogs({ id });
      setWeeklyLogs(res);
    } catch (err) {
      toast.error(err);
    }
  }, []);

  // Complete habit
  const completeHabit = async ({ id }) => {
    try {
      await complete({ id });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <HabitLogContext.Provider
      value={{ weeklyLogs, getHabitWeeklyLogs, completeHabit }}
    >
      {children}
    </HabitLogContext.Provider>
  );
};
