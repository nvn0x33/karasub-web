import ColorButton from "./ColorButton";

export default function ColorRow({ text, colors }) {
    return (
        <div>
            <h6>{text}</h6>
            <div>
                {colors.map((color) => (
                    <ColorButton color={color} />
                ))}
            </div>
        </div>
    );
}
