import { Upload } from "lucide-react";
import HeadDesc from "./HeadDesc";
import PrimaryButton from "./PrimaryButton";
import SupportedFormats from "./SupportedFormats";

export default function UploadBox() {
    return (
        <div className="p-8 flex flex-col items-center gap-10 border border-dashed border-outline w-1/2 m-auto max-md:w-full">
            <Upload size={48} className="text-primary" strokeWidth={3} />
            <HeadDesc
                headline="Drag & drop your video here"
                desc="or click to browse your device"
            />
            <input type="file" id="videoInput" accept="video/*" hidden />
            <PrimaryButton
                text="SELECT FILE"
                handleClick={() => {}}
                id="videoInput"
                htmlFor="videoInput"
            />
            <SupportedFormats />
        </div>
    );
}
