
export default function Chip(props: { text: string, color: string }) {
    const { text, color } = props;
    return (
        <div className={`px-[4px] my-1 mx-1 py-[2px] rounded-full text-xs ${color} text-white`}>
            {text}
        </div>
    )
}