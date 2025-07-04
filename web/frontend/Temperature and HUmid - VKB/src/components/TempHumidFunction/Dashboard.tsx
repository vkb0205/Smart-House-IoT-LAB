import React, { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import SafetyHumidity from "./Gauge/SafetyHumidity";
import WeeklyChart from "./Gauge/WeeklyChart";
import DeviceSwitchGrid from "./Gauge/DeviceSwitchGrid";
import BottomNavBar from "./BottomNavBar";
import RightPanel from "./RightPanel";

//styles
import styles from "../../styles/Dashboard.module.css";

const Dashboard: React.FC = () => {
  const [temperature, setTemperature] = useState(30);
  const [desiredTemp, setDesiredTemp] = useState(30);
  const [humidity, setHumidity] = useState(35);
  const [safety, setSafety] = useState(80);
  const [devices, setDevices] = useState([true, true, true, true, true, true]);

  // Simulate data fetching from ESP32
  useEffect(() => {
    const interval = setInterval(() => {
      // Replace with your fetch logic here
      setTemperature(Math.floor(Math.random() * 10) + 25);
      setHumidity(Math.floor(Math.random() * 40) + 30);
      setSafety(Math.floor(Math.random() * 30) + 70);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDevice = (index: number) => {
    const updated = [...devices];
    updated[index] = !updated[index];
    setDevices(updated);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={`${styles.mainContent} flex flex-col lg:flex-row gap-6`}>
        {/* Left Panel: Temperature and Modes */}
        <LeftPanel
          temperature={temperature}
          desiredTemp={desiredTemp}
          onTempChange={setDesiredTemp}
        />

        <RightPanel
          safety={safety}
          humidity={humidity}
          devices={devices}
          onToggle={toggleDevice}
        />
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Dashboard;
