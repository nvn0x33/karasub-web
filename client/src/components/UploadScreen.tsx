import HeadDesc from "./HeadDesc";

export default function UploadScreen() {
    return (
        <section className="flex flex-col gap-12  bg-bg h-full py-6 px-7 max-md:p-4">
            <HeadDesc
                headline="New Project"
                desc="Upload your video to begin framing perfect subtitles."
            />
            <div>Lorem Ipsum</div>
        </section>
    );
}
