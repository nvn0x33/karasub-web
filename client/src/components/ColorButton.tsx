export default function ColorButton({
    color,
    onSelect,
    selectedColorID,
}: {
    color: string;
    onSelect: (e) => void;
    selectedColorID: string;
}) {
    const id: string = `${color}-button`;
    return (
        <button
            style={{ backgroundColor: color }}
            className={`p-4 rounded outline-2 outline-outline ${
                selectedColorID === id ? "outline-primary" : ""
            }`}
            key={color}
            id={id}
            onClick={onSelect}
        ></button>
    );
}
