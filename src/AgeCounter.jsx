import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  const [age, setAge] = useState(18);

  function increaseAge() {
    setAge(age + 1);
  }
  console.log("rerender !");

  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      <AgeDisplay age={age} />
    </div>
  );
}
