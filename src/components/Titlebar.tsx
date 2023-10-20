import { Show } from "solid-js";

import { LogoIcon, MinimizeIcon, MaximizeIcon, RestoreIcon, CloseIcon } from './Icons';

interface Props {
    isMaximized: boolean,
}

const Titlebar = (props: Props) => {
    return (
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
                    <Show when={!props.isMaximized} fallback={<RestoreIcon  width={16} height={16} />}>
                        <MaximizeIcon width={16} height={16} />
                    </Show>
                </div>
                <div class="titleBtn" id="closeBtn">
                    <CloseIcon width={16} height={16} />
                </div>
            </div>
        </header>
    );
}

export default Titlebar;