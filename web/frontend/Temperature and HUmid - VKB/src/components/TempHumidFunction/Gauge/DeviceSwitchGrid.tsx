import React from "react";

interface Props {
  devices: boolean[];
  onToggle: (index: number) => void;
}

const DeviceSwitchGrid: React.FC<Props> = ({ devices, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {devices.map((status, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
        >
          <span className="font-semibold">Air Conditioner</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={status}
              onChange={() => onToggle(i)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500"></div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default DeviceSwitchGrid;
