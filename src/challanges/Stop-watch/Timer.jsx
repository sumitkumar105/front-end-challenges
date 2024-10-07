import React, { useState, useEffect, useRef } from "react";
import "./TimerStyle.css";
import UiInput from "../../components/UiInput";
import UiButton from "../../components/UiButton";
const Timer = () => {
  const [timer, setTimer] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const soundRef = useRef(null);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let parsedValue = parseInt(value) || "";
    let copyTimer = { ...timer, [name]: parsedValue };
    if (name == "second") {
      copyTimer.minute = Math.floor(parsedValue / 60);
      copyTimer.second = parsedValue % 60;
    } else if (name == "minute") {
      copyTimer.hour = Math.floor(parsedValue / 60);
      copyTimer.minute = parsedValue % 60;
    }
    console.log("checking the =>>>", copyTimer);
    setTimer(copyTimer);
  };
  const toggle = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    console.log("reset");
  };

  useEffect(() => {
    if (isRunning) {
      if (
        timer.hour.length == 0 &&
        timer.minute.length == 0 &&
        timer.second.length == 0
      ) {
        return;
      } else {
        timerRef.current = setInterval(() => {
          setTimer((prevTimer) => {
            let copyTimer = { ...prevTimer };

            copyTimer.second--;
            if (copyTimer.second < 0) {
              copyTimer.minute--;
              copyTimer.second = 59;
              if (copyTimer.minute < 0) {
                copyTimer.hour--;
                copyTimer.minute = 59;
                if (copyTimer.hour < 0) {
                  return {
                    hour: "",
                    minute: "",
                    second: "",
                  };
                }
              }
            }

            console.log("timer is up", copyTimer);
            return copyTimer;
          });
        }, 1000);
        // if (
        //   (timer.hour.length == 0 || timer.hour == " ") &&
        //   (timer.minute.length == 0 || timer.minute == " ") &&
        //   (timer.second.length == 0 || timer.second == " ")
        // ) {
        //   console.log("timer is up");
        //   alert("Your time is Up");
        // }
        return () => {
          clearInterval(timerRef.current);
        };
      }
    }
  }, [isRunning]);
  return (
    <div className="container">
      <div className="flex-container">
        <UiInput
          name="hour"
          placeholder="HH"
          customClass="input"
          value={timer?.hour}
          onChange={handleChange}
        />
        <UiInput
          name="minute"
          value={timer?.minute}
          placeholder="MM"
          customClass="input"
          onChange={handleChange}
        />
        <UiInput
          name="second"
          placeholder="SS"
          customClass="input"
          onChange={handleChange}
          value={timer?.second}
        />
      </div>
      <div className="btn-container">
        <UiButton
          lable={
            isRunning &&
            (timer.hour.length != 0 ||
              timer.minute.length != 0 ||
              timer.second.length != 0)
              ? "pause"
              : "start"
          }
          customClass="btn"
          onClick={toggle}
        />
        <UiButton lable="Reset" customClass="btn" onClick={reset} />
      </div>
    </div>
  );
};
export default Timer;
