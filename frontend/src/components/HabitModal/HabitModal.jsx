import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useCategory } from "../../context/CategoryContext";
import { useHabit } from "../../context/HabitContext";
import { useHabitLog } from "../../context/HabitLogContext";
import CategoryListBox from "./CategoryListBox";
import FrequencyTab from "./FrequencyTab";
import DaySelector from "./DaySelector";
import ActionLoading from "../Loading/ActionLoading";

const frequencies = ["DAILY", "WEEKLY"];
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const HabitModal = ({ isOpen, onClose, initialData }) => {
  const { categories } = useCategory();
  const { addHabit, updateHabit, actionLoading } = useHabit();
  const { getHabitWeeklyLogs } = useHabitLog();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories && categories[0]);
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [scheduledDays, setScheduledDays] = useState(days);

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
        setCategory(categories && categories[0]);
        setFrequency(frequencies[0]);
        setScheduledDays(days);
      }
    };

    check();
  }, [initialData, isOpen, categories]);

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
    await getHabitWeeklyLogs({ id: initialData.id });
  };

  const toggleDay = (day) => {
    setScheduledDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-200 text-gray-800">
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <Dialog.Panel className="border border-gray-200 bg-white shadow-around-sm w-full max-w-md rounded-3xl p-6 md:p-8">
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
                  className="p-1 rounded-full text-gray-500 hover:text-white active:text-white border border-gray-200 hover:border-gray-900 hover:bg-gray-900 active:border-gray-900 active:bg-gray-900 cursor-pointer transition"
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
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Habit name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-gray-400 outline outline-gray-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
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
                    className="resize-none scrollbar-none w-full bg-gray-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-gray-400 outline outline-gray-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
                  ></textarea>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <CategoryListBox
                    categories={categories}
                    category={category}
                    setCategory={setCategory}
                  />
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-xs mb-2">
                    Frequency <span className="text-red-500">*</span>
                  </label>
                  <FrequencyTab
                    frequencies={frequencies}
                    frequency={frequency}
                    setFrequency={setFrequency}
                  />
                </div>

                {/* Repeats */}
                {frequency === "WEEKLY" && (
                  <div>
                    <label className="block text-xs mb-2">
                      Repeat on <span className="text-red-500">*</span>
                    </label>
                    <DaySelector
                      days={days}
                      scheduledDays={scheduledDays}
                      toggleDay={toggleDay}
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-2 mt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 text-sm rounded-full border border-gray-200 hover:text-white hover:bg-gray-900 hover:border-gray-900 active:text-white active:bg-gray-900 active:border-gray-900 cursor-pointer transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="min-w-32 flex justify-center items-center px-6 py-2.5 text-sm font-semibold rounded-full shadow-around-sm shadow-yellow-500/30 text-white bg-yellow-500 hover:bg-yellow-480 active:bg-yellow-600 cursor-pointer hover:scale-103 active:scale-97 transition"
                  >
                    {initialData ? (
                      <span>
                        {actionLoading ? (
                          <ActionLoading text={"Updating"} />
                        ) : (
                          <span>Update Habit</span>
                        )}
                      </span>
                    ) : (
                      <span>
                        {actionLoading ? (
                          <ActionLoading text={"Adding"} />
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <span>✦</span>
                            <span>Add Habit</span>
                          </span>
                        )}
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default HabitModal;
