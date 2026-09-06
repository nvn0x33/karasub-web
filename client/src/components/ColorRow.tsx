import ColorButton from "./ColorButton";
import { useState } from "react";

export default function ColorRow({ text, colors }) {
    const [selectedColorID, setSelectedColor] = useState(null);

    const handleClick = (e) => {
        if (selectedColorID === e.target.id) {
            return;
        }
        setSelectedColor(e.target.id);
    };

    return (
        <div className="flex flex-col gap-1">
            <h6 className="text-size-desc text-headline">{text}</h6>
            <div className="flex gap-1">
                {colors.map((color: string) => (
                    <ColorButton
                        color={color}
                        onSelect={handleClick}
                        selectedColorID={selectedColorID}
                    />
                ))}
            </div>
        </div>
    );
}
