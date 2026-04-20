import { motion } from "motion/react";
import { useCategory } from "../../context/CategoryContext";
import CategoryCard from "./CategoryCard";

const CategoryCards = () => {
  const { categories } = useCategory();

  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6"
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {categories?.map((category) => (
        <CategoryCard key={category.id} categoryName={category.name} />
      ))}
    </motion.div>
  );
};

export default CategoryCards;
