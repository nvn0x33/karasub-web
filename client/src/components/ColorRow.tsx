// refactor this component and its children

import type { subtitleConfig } from "../types/subtitleConfig";
import ColorButton from "./ColorButton";
import ColorInputButton from "./ColorInputButton";

import { useEffect, useState } from "react";

export default function ColorRow({
    id,
    text,
    colors,
    setConfig,
    config,
    target,
}) {
    const [selectedColorID, setSelectedColorID] = useState<string | null>(null);
    const [configColor, setConfigColor] = useState<string>("");

    useEffect(() => {
        setConfig((prev: subtitleConfig) => ({
            ...prev,
            [target]: configColor,
        }));
    }, [configColor, setConfig, target]);

    const handleSharedEffect = () => {
        if (id === "outline-color" && !config.outline_enabled) return true;
        else if (id === "shadow-color" && !config.shadow_enabled) return true;

        return false;
    };

    return (
        <div
            className={`${
                handleSharedEffect()
                    ? "grayscale opacity-50 pointer-events-none"
                    : ""
            } flex flex-col gap-1`}
            id={id}
        >
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
