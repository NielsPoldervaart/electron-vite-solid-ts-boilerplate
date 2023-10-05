import { Counter } from "./components/Counter";
import { Hello } from "./components/Hello";

export const App = () => {
  return (
    <div>
      <h1>Solid + Vite + TypeScript</h1>
      <div class="card">
        <Counter />
      </div>
      <p class="hello">
        <Hello msg="Hello world!"/>
      </p>
    </div>
  );
};
