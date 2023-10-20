import { SVGProps } from '../components/Icons';

const Close = (props: SVGProps) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m7.116 8-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"/></svg>
    )
}

export default Close;