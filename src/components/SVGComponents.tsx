interface Props {
    width: number,
    height: number,
}

export const LogoIcon = (props: Props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32"><path d="m30 16-9 7v-2.534L26.742 16 21 11.534V9l9 7zm-19 4.466L5.258 16 11 11.534V9l-9 7 9 7v-2.534zM17.794 9l-6 14h2.177l6-14h-2.177z"/></svg>
    )
}

export const MinimizeIcon = (props: Props) => {
    return(
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 8v1H3V8h11z"/></svg>
    )
}

export const MaximizeIcon = (props: Props) => {
    return(
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg>
    )
}

export const RestoreIcon = (props: Props) => {
    return(
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v9h9V5H3zm8 8H4V6h7v7z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5v2z"/></svg>
    )
}

export const CloseIcon = (props: Props) => {
    return(
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m7.116 8-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"/></svg>
    )
}