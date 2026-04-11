import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const FrequencyTab = ({ frequencies, frequency, setFrequency }) => {
  return (
    <Tab.Group
      selectedIndex={frequencies.indexOf(frequency)}
      onChange={(index) => setFrequency(frequencies[index])}
    >
      <Tab.List className="grid grid-cols-2 w-full bg-stone-100 rounded-xl p-1 text-xs outline outline-stone-200 transition">
        {frequencies.map((frequency) => (
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
  );
};

export default FrequencyTab;
