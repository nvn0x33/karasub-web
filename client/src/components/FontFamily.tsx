// import { useEffect } from "react";

import type { subtitleConfig } from "../types/subtitleConfig";

const SUPPORTED_FONTS = [
    {
        displayName: "Roboto Mono",
        value: "roboto-mono",
    },
    {
        displayName: "Inter",
        value: "inter",
    },
];

export default function FontFamily({ setConfig }) {
    // useEffect(() => {
    //     // get the supported font information from the backend
    // });

    const handleChange = (e) => {
        setConfig((prev: subtitleConfig) => ({
            ...prev,
            "font-family": e.value,
        }));
    };

    return (
        <div className="flex flex-col gap-1">
            <h6 className="text-size-desc text-headline">
                <label htmlFor="font-family">Font Family</label>
            </h6>
            <select name="font-family" id="font-family" onChange={handleChange}>
                {SUPPORTED_FONTS.map((font, index: number) => (
                    <option key={index} value={font.value}>
                        {font.displayName}
                    </option>
                ))}
            </select>
        </div>
    );
}
