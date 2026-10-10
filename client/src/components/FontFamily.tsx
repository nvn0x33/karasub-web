// import { useEffect } from "react";

import { useRef, useState } from "react";
import type { subtitleConfig } from "../types/subtitleConfig";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

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
    const [fontList, setFontList] = useState(SUPPORTED_FONTS);
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
        <div className="flex flex-col gap-2">
            <h6 className="text-size-desc text-headline">
                <label htmlFor="font-family">Font Family</label>
            </h6>
            <select
                className="text-size-desc border-2 border-outline p-1 text-desc"
                name="font-family"
                id="font-family"
                onChange={handleChange}
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
            <UploadFont setFontList={setFontList} />
        </div>
    );
}

function UploadFont(setFontList) {
    const fontInput = useRef(null);
    const handleClick = () => {
        fontInput.current.click();
    };
    return (
        <div>
            <div>
                <input
                    ref={fontInput}
                    onChange={(e) => {
                        handleFileUpload(e.target.files);
                    }}
                    type="file"
                    id="fontInput"
                    accept=".ttf,.otf,.ttc"
                    hidden
                />
                <SecondaryButton
                    text="SELECT FILE"
                    handleClick={handleClick}
                    id="fontInput"
                />
            </div>
        </div>
    );
}
