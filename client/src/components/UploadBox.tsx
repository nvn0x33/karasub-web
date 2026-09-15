import { useState, useContext, useRef } from "react";
import { Upload } from "lucide-react";

import HeadDesc from "./HeadDesc";
import PrimaryButton from "./PrimaryButton";
import SupportedFormats from "./SupportedFormats";
import { PageContext } from "../contexts";

export default function UploadBox() {
    const [hover, setHover] = useState<boolean>(false);
    const nextPage = useContext(PageContext);
    const uploadInput = useRef(null);

    const handleFileUpload = (files: FileList) => {
        const file: File = files[0];

        if (!file || !file.type.includes("video")) {
            alert("The uploaded video is not valid!");
            return;
        } else {
            console.log(file.type);
        }

        // Upload the file to backend here.

        nextPage();
    };
    const handleClick = () => {
        uploadInput.current.click();
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
            className={`px-8 py-12 border border-dashed border-outline w-1/2 m-auto max-md:w-full ${
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
                    ref={uploadInput}
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
                    handleClick={handleClick}
                    id="videoInput"
                />
                <SupportedFormats />
            </div>
        </div>
    );
}
