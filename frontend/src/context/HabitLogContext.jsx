import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "sonner";
import { complete, fetchWeeklyHabitLogs } from "../services/habitLogServices";

const HabitLogContext = createContext();

export const useHabitLog = () => {
  return useContext(HabitLogContext);
};

export const HabitLogProvider = ({ children }) => {
  const [weeklyLogs, setWeeklyLogs] = useState(null);
  const [weeklyLogsLoading, setWeeklyLogsLoading] = useState(false);

  // Get habit weekly logs
  const getHabitWeeklyLogs = useCallback(async ({ id }) => {
    setWeeklyLogsLoading(true);
    try {
      const res = await fetchWeeklyHabitLogs({ id });
      setWeeklyLogs(res);
    } catch (err) {
      toast.error(err);
    } finally {
      setWeeklyLogsLoading(false);
    }
  }, []);

  // Complete habit
  const completeHabit = async ({ id }) => {
    try {
      const res = await complete({ id });
      return res;
    } catch (err) {
      toast.error(err);
      throw err;
    }
  };

  return (
    <HabitLogContext.Provider
      value={{ weeklyLogs, weeklyLogsLoading, getHabitWeeklyLogs, completeHabit }}
    >
      {children}
    </HabitLogContext.Provider>
  );
};
