import React, { useState, useEffect, useRef } from "react";

const AnimatedComponent = ({ children }) => {
  const [animationClass, setAnimationClass] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationClass("slide-in");
        } else {
          setAnimationClass("");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`animation ${animationClass}`} ref={ref}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
