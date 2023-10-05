import { Component } from "solid-js"

interface Props {
    msg: string
}

declare global {
    interface Window {
        api:any;
    }
}

export const Hello: Component<Props> = (props: Props) => {
    return(
        <div>
            <h1>{props.msg}</h1>
            <button onClick={() => console.log(window.api.getHello())}>Hello World!</button>
        </div>
    )
}