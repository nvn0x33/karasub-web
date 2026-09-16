import { useState } from "react";

export default function ColorInputButton({
    rowID,
    setSelectedColorID,
    selectedColorID,
    setConfigColor,
}: {
    rowID: string;
    setSelectedColorID;
    selectedColorID: string;
    setConfigColor;
}) {
    const [pickedColor, setPickedColor] = useState<string | null>(null);
    const id: string = `${rowID}-input`;

    const handleChange = (e) => {
        setSelectedColorID(e.target.id);
        setPickedColor(e.currentTarget.value);
        setConfigColor(e.currentTarget.value);
    };
    return (
        <input
            id={id}
            className={`${
                pickedColor === null
                    ? "bg-[linear-gradient(to_right,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#8b00ff)] p-4"
                    : ""
            }
            rounded  outline-2 outline-outline ${
                selectedColorID === id ? "outline-primary" : ""
            }`}
            type="color"
            name="pickcolor"
            onChange={handleChange}
            value={pickedColor}
            aria-label="Pick your favorite color"
        />
    );
}
