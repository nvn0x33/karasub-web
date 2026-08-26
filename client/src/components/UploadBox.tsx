import { useState } from "react";

import { Upload } from "lucide-react";
import HeadDesc from "./HeadDesc";
import PrimaryButton from "./PrimaryButton";
import SupportedFormats from "./SupportedFormats";

export default function UploadBox() {
    const [hover, setHover] = useState<boolean>(false);

    const handleFileUpload = (files) => {
        const file1 = files[0];
        console.log(file1.type);
    };
    return (
        <div
            onDragEnter={() => {
                setHover(true);
            }}
            onDragLeave={() => {
                setHover(false);
            }}
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
                setHover(false);
            }}
            className={`p-8 border border-dashed border-outline w-1/2 m-auto max-md:w-full ${
                hover ? "border-primary" : ""
            } `}
        >
            <div
                className={`flex flex-col items-center gap-10 ${
                    hover ? "pointer-events-none" : ""
                }`}
            >
                <Upload size={48} className="text-primary" strokeWidth={3} />
                <HeadDesc
                    headline="Drag & drop your video here"
                    desc="or click to browse your device"
                />
                <input
                    onChange={(e) => {
                        handleFileUpload(e.target.files);
                    }}
                    type="file"
                    id="videoInput"
                    accept="video/*"
                    hidden
                />
                <PrimaryButton
                    text="SELECT FILE"
                    handleClick={() => {}}
                    id="videoInput"
                    htmlFor="videoInput"
                />
                <SupportedFormats />
            </div>
        </div>
    );
}
