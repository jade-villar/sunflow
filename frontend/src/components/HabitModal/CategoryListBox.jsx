import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const CategoryListBox = ({ categories, category, setCategory }) => {
  return (
    <Listbox
      as="div"
      value={category}
      onChange={setCategory}
      className="relative w-full"
    >
      <Listbox.Button className="flex justify-between items-center w-full bg-gray-100 rounded-xl px-3.5 py-3 text-sm outline outline-gray-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition">
        <div className="flex items-center gap-3">
          <img
            src={`/icons/${category?.icon}.svg`}
            className="w-4 aspect-square"
          />
          <span>{category?.name}</span>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </Listbox.Button>

      <Listbox.Options className="absolute z-10 mt-2 w-full bg-gray-100 rounded-xl outline outline-gray-200 overflow-hidden max-h-60 overflow-y-auto scrollbar scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {categories?.map((cat) => (
          <Listbox.Option key={cat.id} value={cat} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`flex items-center justify-between px-3.5 py-3 text-sm cursor-pointer ${
                  active ? "bg-yellow-500" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`/icons/${cat.icon}.svg`}
                    className="w-4 aspect-square"
                  />
                  <span className={active ? "text-white" : ""}>{cat.name}</span>
                </div>
                {selected && (
                  <span
                    className={`pr-1 font-bold ${active ? "text-white" : "text-yellow-500"}`}
                  >
                    ✓
                  </span>
                )}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CategoryListBox;
