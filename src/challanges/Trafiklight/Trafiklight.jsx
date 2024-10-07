import React, { useState, useEffect, useRef } from "react";
import "./Trafic.css";
const Trafiklight = () => {
  const [lightColor, setColor] = useState([
    { color: "yellow", time: 5 },
    { color: "red", time: 10 },
    { color: "green", time: 15 },
  ]);
  const timeRef = useRef(null);
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   timeRef.current = setTimeout(() => {
  //     setActive((prev) => (prev + 1) % lightColor.length);
  //   }, 1000 * lightColor[active].time);
  //   return () => {
  //     clearTimeout(timeRef.current);
  //   };
  // }, [lightColor, active]);
  useEffect(() => {
    timeRef.current = setTimeout(() => {
      if (active < lightColor.length - 1) {
        setActive((prev) => prev + 1);
      } else {
        setActive(0);
      }
    }, 1000 * lightColor[0].time);
    return () => {
      clearInterval(timeRef.current);
    };
  }, [lightColor, active]);

  return (
    <div className="container">
      <div className="signal">
        {lightColor.map((col, index) => {
          return (
            <div
              key={index}
              className={`light ${active == index ? col.color : ""}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default Trafiklight;
