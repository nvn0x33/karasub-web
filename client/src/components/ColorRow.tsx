import ColorButton from "./ColorButton";

export default function ColorRow({ text, colors }) {
    return (
        <div className="flex flex-col gap-1">
            <h6 className="text-size-desc text-headline">{text}</h6>
            <div className="flex gap-1">
                {colors.map((color: string) => (
                    <ColorButton color={color} />
                ))}
            </div>
        </div>
    );
}
