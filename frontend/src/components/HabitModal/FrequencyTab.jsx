import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const FrequencyTab = ({ frequencies, frequency, setFrequency }) => {
  return (
    <Tab.Group
      selectedIndex={frequencies.indexOf(frequency)}
      onChange={(index) => setFrequency(frequencies[index])}
    >
      <Tab.List className="grid grid-cols-2 w-full bg-gray-100 rounded-xl p-1 text-xs outline outline-gray-200 transition">
        {frequencies.map((frequency) => (
          <Tab key={frequency} as={Fragment}>
            {({ selected }) => (
              <button
                className={`font-semibold p-2.5 rounded-lg tracking-wide cursor-pointer transition
                  ${
                    selected
                      ? "bg-white text-gray-800 shadow-around-sm"
                      : "text-gray-400 hover:text-gray-800"
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
