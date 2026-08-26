import { TvMinimalPlay } from "lucide-react";

export default function SupportedFormats() {
    const formats: string[] = ["MP4", "MOV", "WEBM", "MKV"];

    return (
        <div className="w-1/2">
            <div className="h-px w-full bg-outline"> </div>
            <div className="flex gap-4 items-center justify-center mt-8">
                {formats.map((format: string, index: number) => (
                    <div
                        key={index}
                        className="flex text-desc gap-1 items-center text-mono-code font-mono font-medium"
                    >
                        <TvMinimalPlay strokeWidth={2.5} size={16} />
                        <span>{format}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
