import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return <div>UseEffect{count}</div>;
};
export default UseEffect;
