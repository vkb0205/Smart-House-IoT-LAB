import React from "react";

interface Props {
  safety: number;
  humidity: number;
}

const SafetyHumidity: React.FC<Props> = ({ safety, humidity }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-600">Safety Score</p>
        <h2 className="text-2xl font-bold">{safety}/100</h2>
      </div>
      <div className="bg-gray-100 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-600">Humidity</p>
        <h2 className="text-2xl font-bold">{humidity}%</h2>
      </div>
    </div>
  );
};

export default SafetyHumidity;
