import { useEffect, useState } from "react";

function SubNavbar() {
  const [bgColor, setBgColor] = useState("bg-primary");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //   Background color change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor((prevColor) =>
        prevColor === "bg-primary" ? "bg-secondary" : "bg-primary"
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  //   Time left
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timerId);
      }
    };

    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  //   Coundown Component
  const Countdown = ({ timeLeft, title }) => {
    return (
      <div className="py-1 px-2 md:py-1 md:px-3 lg:py-1 lg:px-3 bg-white rounded-sm text-center flex flex-col">
        <span className="m-0 p-0 text-sm font-extrabold">{timeLeft}</span>
        <span className="m-0 p-0 text-[8px] font-bold">{title}</span>
      </div>
    );
  };
  return (
    <div className={`${bgColor} transition-all duration-500`}>
      <div className="container py-2 flex items-center gap-4 justify-center">
        <h5 className="text-white">SAVE UP TO 56% WITH 4 FREE GIFTS</h5>
        <div className="countdown flex gap-2 items-center">
          <Countdown timeLeft={timeLeft.hours} title={"HRS"} />{" "}
          <span className="text-white text-lg">:</span>
          <Countdown timeLeft={timeLeft.minutes} title={"MIN"} />{" "}
          <span className="text-white text-lg">:</span>
          <Countdown timeLeft={timeLeft.seconds} title={"SEC"} />
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
