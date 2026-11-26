// import { useEffect } from "react";

import { useState } from "react";
import type { subtitleConfig } from "../types/subtitleConfig";
import UploadFont from "./UploadFont";

const SUPPORTED_FONTS = [
    {
        displayName: "Roboto Mono",
        value: "Roboto Mono",
    },
    {
        displayName: "Inter",
        value: "Inter",
    },
];
export default function FontFamily({ setConfig }) {
    const [fontList, setFontList] = useState(SUPPORTED_FONTS);
    const [value, setValue] = useState<string>("Roboto Mono");

    const handleChange = (e) => {
        setValue(e.target.value);
        setConfig((prev: subtitleConfig) => ({
            ...prev,
            font_family: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col gap-2">
            <h6 className="text-size-desc text-headline">
                <label htmlFor="font-family">Font Family</label>
            </h6>
            <select
                className="text-size-desc border-2 border-outline p-1 text-desc bg-config-bg"
                name="font-family"
                id="font-family"
                onChange={handleChange}
                value={value}
            >
                {fontList.map((font, index: number) => (
                    <option
                        className="text-size-desc"
                        key={index}
                        value={font.value}
                    >
                        {font.displayName}
                    </option>
                ))}
            </select>
            <UploadFont setFontList={setFontList} setValue={setValue} />
        </div>
    );
}
