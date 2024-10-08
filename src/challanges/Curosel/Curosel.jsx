import React, { useState, useEffect, useRef } from "react";
import UiButton from "../../components/UiButton";
import "./curosel.css";
const Curosel = () => {
  const [active, setActive] = useState(0);
  const imgRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [image, setImage] = useState([
    "https://images.unsplash.com/photo-1728198276856-37d69d4f008e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1708922113519-1f06e41b46c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3Dr.com/150?text=Naruto+2",
    "https://images.unsplash.com/photo-1708917880580-a6bea5c232a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1718178951680-50c648214d55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1711470598139-0502f782a68e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D",
  ]);
  const handleNext = () => {
    active < image.length - 1 ? setActive((prev) => prev + 1) : setActive(0);
  };
  const handlePrev = () => {
    active > 0 ? setActive((prev) => prev - 1) : setActive(image.length - 1);
  };
  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
  useEffect(() => {
    if (isRunning) {
      imgRef.current = setTimeout(() => {
        if (active < image.length - 1) {
          setActive((prev) => prev + 1);
        } else {
          setActive(0);
        }
      }, 1000);

      return () => {
        clearTimeout(imgRef.current);
      };
    }
  }, [active, image, isRunning]);
  return (
    <div className="container">
      <div className="slide">
        <div className="img-container">
          <div className="left-arrow" onClick={handlePrev}>
            {"<"}
          </div>
          <img className="img" src={image[active]} />
          <div className="right-arrow" onClick={handleNext}>
            {">"}
          </div>
        </div>
      </div>
      <div className="btn-container">
        <UiButton lable="Start" customClass="btn" onClick={start} />
        <UiButton lable="Stop" customClass="btn" onClick={stop} />
      </div>
    </div>
  );
};
export default Curosel;
