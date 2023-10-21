import { SVGProps } from "../components/Icons";

const Logo = (props: SVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32"><path d="m30 16-9 7v-2.534L26.742 16 21 11.534V9l9 7zm-19 4.466L5.258 16 11 11.534V9l-9 7 9 7v-2.534zM17.794 9l-6 14h2.177l6-14h-2.177z"/></svg>
    )
}

export default Logo;