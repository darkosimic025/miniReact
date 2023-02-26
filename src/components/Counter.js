import { miniReact } from "../../miniReact";
import "./counter.css";

export const Counter = () => {
  const [state, setState] = miniReact.useState(1);
  return (
    <>
   <div>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <p key={i}>{i}</p>
        ))}
    </div>
      <p>Darko</p>
      <h1
        className="counter"
        onClick={() => setState((c) => c + 1)}
        style="user-select: none"
      >
        Count: {state}
      </h1>
    </>
  );
};
