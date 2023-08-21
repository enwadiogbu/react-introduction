import { Greetings } from "./Greetings/Greetings";
import { Car } from "./components/Car/Car";
import "./global.css";

export function App() {
  return (
    <div>
      <Car />
      <Greetings />
    </div>
  );
}
