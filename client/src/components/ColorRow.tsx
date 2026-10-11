import type { colorConfigMap } from "../types/colorConfigMap";
import type { subtitleConfig } from "../types/subtitleConfig";
import ColorButton from "./ColorButton";
import ColorInputButton from "./ColorInputButton";

import { useEffect, useState } from "react";

const keyMap: colorConfigMap = {
    "highlight-text": "highlighted_word_color",
    "highlight-outline": "highlighted_word_outline_color",
    "other-text": "other_word_color",
    "other-outline": "other_word_outline_color",
};

export default function ColorRow({ id, text, colors, setConfig }) {
    const [selectedColorID, setSelectedColorID] = useState<string | null>(null);
    const [configColor, setConfigColor] = useState<string>("");

    useEffect(() => {
        if (keyMap[id]) {
            const target: string = keyMap[id];
            setConfig((prev: subtitleConfig) => ({
                ...prev,
                [target]: configColor,
            }));
        }
    }, [configColor, id, setConfig]);

    return (
        <div className="flex flex-col gap-1" id={id}>
            <h6 className="text-size-desc text-headline">{text}</h6>
            <div className="flex gap-1">
                {colors.map((color: string) => (
                    <ColorButton
                        key={color}
                        color={color}
                        setSelectedColorID={setSelectedColorID}
                        selectedColorID={selectedColorID}
                        setColor={setConfigColor}
                    />
                ))}
                <ColorInputButton
                    rowID={id}
                    setSelectedColorID={setSelectedColorID}
                    selectedColorID={selectedColorID}
                    setConfigColor={setConfigColor}
                />
            </div>
        </div>
    );
}
