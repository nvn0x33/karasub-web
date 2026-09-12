import ColorButton from "./ColorButton";
import { useState } from "react";

export default function ColorRow({ id, text, colors, setConfig }) {
    const [selectedColorID, setSelectedColorID] = useState(null);
    const [color, setColor] = useState("");

    return (
        <div className="flex flex-col gap-1" id={id}>
            <h6 className="text-size-desc text-headline">{text}</h6>
            <div className="flex gap-1">
                {colors.map((color: string) => (
                    <ColorButton
                        color={color}
                        setSelectedColorID={setSelectedColorID}
                        selectedColorID={selectedColorID}
                        setColor={setColor}
                    />
                ))}
            </div>
        </div>
    );
}
