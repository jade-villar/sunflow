import { createContext, useContext, useEffect, useState } from "react";
import { fetchCategories } from "../services/categoryServices";

const CategoryContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetchCategories();
      setCategories(res.data);
    };

    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
