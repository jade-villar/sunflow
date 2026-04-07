import { createContext, useCallback, useContext, useState } from "react";
import { complete, fetchWeeklyHabitLogs } from "../services/habitLogService";

const HabitLogContext = createContext();

export const useHabitLog = () => {
  return useContext(HabitLogContext);
};

export const HabitLogProvider = ({ children }) => {
  const [weeklyLogs, setWeeklyLogs] = useState(null);

  const getHabitWeeklyLogs = useCallback(async ({ id }) => {
    const res = await fetchWeeklyHabitLogs({ id });
    setWeeklyLogs(res);
  }, []);

  const completeHabit = async ({ id }) => {
    const res = await complete({ id });
    await getHabitWeeklyLogs({ id })
    console.log(res);
  };

  return (
    <HabitLogContext.Provider value={{ weeklyLogs, getHabitWeeklyLogs, completeHabit }}>
      {children}
    </HabitLogContext.Provider>
  );
};
