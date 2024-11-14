import { useState } from "react";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTopSmooth}
      style={{ display: visible ? "inline" : "none" }}
      className=" fixed w-12 right-16 bottom-10 h-12 z-0 text-5xl cursor-pointer p-2 text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="-5 -4.5 24 24"
      >
        <path
          fill="currentColor"
          d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414zm0 6l-4.95 4.95a1 1 0 1 1-1.414-1.414l5.657-5.657a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414z"
        />
      </svg>
    </button>
  );
};
export default ScrollUpButton;
