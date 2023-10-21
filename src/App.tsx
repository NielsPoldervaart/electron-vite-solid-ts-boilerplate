import { createSignal } from "solid-js"

import { Counter } from "./components/Counter";
import Titlebar from "./components/Titlebar";

export const App = () => {
  const [isMaximized, setIsMaximized] = createSignal(false);

  const handleWindowMaximizedChange = (maximized: boolean) => {
    setIsMaximized(maximized);
  };

  // When window is maximized / unmaximized call callback function.
  window.api.onWindowMaximizedChange(handleWindowMaximizedChange);

  // logs a message based on if the app is up to date or not.
  window.api.updateMessage((message: string) => {
    console.log(message)
  })

  return (
    <>
      <Titlebar isMaximized={isMaximized()}/>
      <div class="main-content">
        <h1>SolidJS + Vite + TypeScript</h1>
        <div class="card">
          <Counter />
        </div>
      </div>
    </>
  );
};
