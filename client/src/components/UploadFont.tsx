import { useState, useRef } from "react";
import { ALargeSmall, Trash, Plus } from "lucide-react";

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
                <button
                    className="flex items-center gap-2 w-full border-2 border-dotted border-outline bg-bg-file p-2 hover:bg-desc/10"
                    onClick={handleClick}
                    id="fontInput"
                >
                    <span className="p-1 bg-desc/10 rounded">
                        <Plus className="text-primary " size={20} />
                    </span>
                    <span className="text-size-desc overflow-hidden text-desc ">
                        Add Custom Font
                    </span>
                </button>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-between gap-1 max-w-full border-2 border-outline p-2  bg-bg-file">
            <div className="flex gap-2 items-center min-w-0">
                <ALargeSmall className="text-primary shrink-0" />

                <div className="text-desc truncate flex flex-col-reverse items-start gap-1">
                    <span className="text-[0.6rem] text-desc p-1 bg-desc/8">
                        {(fontUpload.size / 1000000).toFixed(2)} MB
                    </span>
                    <span className="text-[0.8rem] text-desc">
                        {fontUpload.name}
                    </span>
                </div>
            </div>
            <button
                className="hover:bg-desc/10 p-1"
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
