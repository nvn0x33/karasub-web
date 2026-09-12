export default function ColorButton({
    color,
    setSelectedColorID,
    selectedColorID,
    setColor,
}: {
    color: string;
    setSelectedColorID;
    selectedColorID: string;
    setColor;
}) {
    const id: string = `${color}-button`;

    const handleClick = (e) => {
        if (selectedColorID === e.target.id) {
            return;
        }
        setSelectedColorID(e.target.id);
        setColor(color);
    };
    return (
        <button
            style={{ backgroundColor: color }}
            className={`p-4 rounded outline-2 outline-outline ${
                selectedColorID === id ? "outline-primary" : ""
            }`}
            key={id}
            id={id}
            onClick={handleClick}
        ></button>
    );
}
