import HeadDesc from "./HeadDesc";

export default function UploadScreen() {
    return (
        <section className="text-center flex flex-col gap-12 bg-bg h-full py-6 px-7 max-md:p-4">
            <HeadDesc
                headline="New Project"
                desc="Upload your video to begin framing perfect subtitles."
            />
            <div className="flex flex-col gap-2">
                <div className="video-upload-container"></div>
                <span className="text-mono-label font-mono font-medium text-desc">
                    Maximum file size: 2GB. For best results, use 1080p source
                    material.
                </span>
            </div>
        </section>
    );
}
