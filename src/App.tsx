import { createSignal, Show } from "solid-js"

import { Counter } from './components/Counter';
import { LogoIcon } from './components/SVGComponents';
import { MinimizeIcon } from './components/SVGComponents';
import { MaximizeIcon } from './components/SVGComponents';
import { RestoreIcon } from "./components/SVGComponents";
import { CloseIcon } from './components/SVGComponents';

export const App = () => {
  const [isMaximized, setIsMaximized] = createSignal(false);

  const handleWindowMaximizedChange = (maximized: boolean) => {
    setIsMaximized(maximized);
  };

  // When window is maximized / unmaximized call callback function.
  window.api.onWindowMaximizedChange(handleWindowMaximizedChange);

  return (
    <>
      <header id="titlebar">
        <div id="titlebar-drag">
          <div id="titleLogo">
            <LogoIcon width={32} height={32} />
          </div>
        </div>
        <div id="titleBtns">
          <div class="titleBtn" id="minimizeBtn">
            <MinimizeIcon  width={16} height={16} />
          </div>
          <div class="titleBtn" id="maximizeBtn">
            <Show when={!isMaximized()} fallback={<RestoreIcon  width={16} height={16} />}>
              <MaximizeIcon width={16} height={16} />
            </Show>
          </div>
          <div class="titleBtn" id="closeBtn">
            <CloseIcon width={16} height={16} />
          </div>
        </div>
      </header>
      <div class="main-content">
        <h1>SolidJS + Vite + TypeScript</h1>
        <div class="card">
          <Counter />
        </div>
      </div>
    </>
  );
};
