import { useState, Fragment, useEffect } from "react";
import { Dialog, Listbox, Tab } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { getCategories } from "../services/categoryService";
import { useHabit } from "../context/HabitContext";

const frequencyOptions = ["DAILY", "WEEKLY"];
const dayOptions = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const HabitModal = ({ isOpen, onClose, initialData }) => {
  const { addHabit, updateHabit } = useHabit();

  const [categoryOptions, setCategoryOptions] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [frequency, setFrequency] = useState(frequencyOptions[0]);
  const [scheduledDays, setScheduledDays] = useState(dayOptions);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await getCategories();
      setCategoryOptions(res.data);

      if (res.data.length > 0) {
        setCategory(res.data[0]);
      }
    };
    
    loadCategories();
  }, []);

  // Populate when editing
  useEffect(() => {
    const check = () => {
      if (initialData) {
        setTitle(initialData.title);
        setDescription(initialData.description);
        setCategory(initialData.category);
        setFrequency(initialData.frequency);
        setScheduledDays(initialData.scheduledDays);
      } else {
        setTitle("");
        setDescription("");
        setCategory(categoryOptions[0]);
        setFrequency(frequencyOptions[0]);
        setScheduledDays(dayOptions);
      }
    };

    check();
  }, [initialData, isOpen, categoryOptions]);

  const handleAdd = async (e) => {
    e.preventDefault();
    
    await addHabit({
      title,
      description,
      categoryId: category.id,
      frequency,
      scheduledDays,
    });
    onClose();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateHabit({
      id: initialData.id,
      title,
      description,
      categoryId: category.id,
      frequency,
      scheduledDays,
    });
    onClose();
  };

  const toggleDay = (day) => {
    setScheduledDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-200 text-slate-900"
    >
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="border border-slate-200 bg-white shadow-around-md w-full max-w-md rounded-3xl p-6 md:p-8">
          <div className="flex justify-between items-start gap-6 mb-8">
            <Dialog.Title className="flex flex-col items-start gap-0.5">
              <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-wider">
                {initialData ? "Update Habit" : "New Habit"}
              </span>
              <span className="text-2xl font-bold font-fraunces">
                {initialData ? "Edit a Habit" : "Add a Habit"}
              </span>
            </Dialog.Title>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-500 hover:text-white active:text-white border border-slate-200 hover:border-slate-900 hover:bg-slate-900 active:border-slate-900 active:bg-slate-900 cursor-pointer transition"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          <form
            onSubmit={initialData ? handleUpdate : handleAdd}
            className="flex flex-col gap-4"
          >
            {/* Title */}
            <div>
              <label className="block text-xs mb-2">
                Title <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Habit name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-stone-400 outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs mb-2">Description</label>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none scrollbar-none w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-stone-400 outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs mb-2">
                Category <span className="text-yellow-500">*</span>
              </label>
              <Listbox
                as="div"
                value={category}
                onChange={setCategory}
                className="relative w-full"
              >
                <Listbox.Button className="flex justify-between items-center w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition">
                  <div className="flex items-center gap-3">
                    <img src={`/icons/${category?.icon}.svg`} className="w-4 aspect-square" />
                    <span>{category?.name}</span>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-slate-500" />
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-2 w-full bg-stone-100 rounded-xl outline outline-stone-200 overflow-hidden max-h-60 overflow-y-auto scrollbar scrollbar-thumb-stone-200 scrollbar-track-transparent">
                  {categoryOptions?.map((cat) => (
                    <Listbox.Option key={cat.id} value={cat} as={Fragment}>
                      {({ active, selected }) => (
                        <li
                          className={`flex items-center justify-between px-3.5 py-3 text-sm cursor-pointer ${
                            active ? "bg-yellow-500" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={`/icons/${cat.icon}.svg`} className="w-4 aspect-square" />
                            <span className={active ? "text-white" : ""}>
                              {cat.name}
                            </span>
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
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-xs mb-2">
                Frequency <span className="text-yellow-500">*</span>
              </label>
              <Tab.Group
                selectedIndex={frequencyOptions.indexOf(frequency)}
                onChange={(index) => setFrequency(frequencyOptions[index])}
              >
                <Tab.List className="grid grid-cols-2 w-full bg-stone-100 rounded-xl p-1 text-xs outline outline-stone-200 transition">
                  {frequencyOptions.map((frequency) => (
                    <Tab key={frequency} as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`font-semibold p-2.5 rounded-lg tracking-wide cursor-pointer transition
                          ${
                            selected
                              ? "bg-white text-slate-800 shadow-around-sm"
                              : "text-stone-400 hover:text-slate-800"
                          }
                        `}
                        >
                          {frequency}
                        </button>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
            </div>

            {/* Repeats */}
            {frequency === "WEEKLY" && (
              <div>
                <label className="block text-xs mb-2">
                  Repeat on <span className="text-yellow-500">*</span>
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {dayOptions.map((day) => {
                    const active = scheduledDays.includes(day);

                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`py-4 text-xs rounded-xl outline cursor-pointer transition
                        ${
                          active
                            ? "bg-yellow-500 text-white outline-yellow-500 shadow-around-sm shadow-yellow-200"
                            : "bg-stone-100 text-slate-800 outline-stone-200 hover:bg-yellow-100 hover:text-yellow-600 hover:outline-yellow-500"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-2 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-sm rounded-full border border-stone-200 hover:text-white hover:bg-slate-900 hover:border-slate-900 active:text-white active:bg-slate-900 active:border-slate-900 cursor-pointer transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-semibold rounded-full shadow-around-sm shadow-yellow-200 text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 cursor-pointer hover:-translate-y-px active:translate-y-0 transition"
              >
                {initialData ? "Update Habit" : "✦ Add Habit"}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default HabitModal;
