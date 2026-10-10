import { useState, useRef } from "react";
import { ALargeSmall, Trash, Plus } from "lucide-react";
import SecondaryButton from "./SecondaryButton";

export default function UploadFont({ setFontList }) {
    const [fontUpload, setFontUpload] = useState<File | null>(null);
    const fontInput = useRef(null);

    const handleFileUpload = (files: FileList) => {
        const file: File = files[0];
        const name = file.name.toLowerCase();

        if (!file) {
            alert("The uploaded file is invalid!");
            return;
        }

        const validFile: boolean =
            name.endsWith(".ttf") ||
            name.endsWith(".otf") ||
            name.endsWith(".ttc");

        if (!validFile) {
            alert(
                "The uploaded font file is not supported!\n .ttf, .otf and .ttc are currently supported."
            );
            return;
        }
        const details = {
            displayName: file.name,
            value: file.name,
        };
        setFontUpload(file);
        setFontList((prev) => {
            return [...prev, details];
        });
    };
    const handleClick = () => {
        fontInput.current.click();
    };

    if (!fontUpload) {
        return (
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
                {/* <SecondaryButton
                    text="SELECT FILE"
                    handleClick={handleClick}
                    
                /> */}
                <button
                    className="flex items-center gap-2 w-full  border-2 border-dotted border-outline p-2 hover:bg-desc/20"
                    onClick={handleClick}
                    id="fontInput"
                >
                    <Plus
                        className="text-primary bg-desc/10 rounded "
                        size={24}
                    />
                    <span className="text-size-desc overflow-hidden text-desc ">
                        Add Custom Font
                    </span>
                </button>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-between border-2 border-outline p-2">
            <div className="flex gap-4 items-center">
                <ALargeSmall className="text-primary" />
                <span className="text-[0.8rem] overflow-hidden text-desc">
                    {fontUpload.name}
                </span>
            </div>
            <button
                onClick={() => {
                    setFontUpload(null);
                    setFontList((prev) => {
                        return [...prev].slice(0, -1);
                    });
                }}
            >
                <Trash className="text-desc" size={18} />
            </button>
        </div>
    );
}
