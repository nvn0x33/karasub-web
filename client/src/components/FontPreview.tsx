// font = min(width, height) * 0.06 * Scale;
import Preview from "../assets/preview-image.webp";

export default function FontPreview({ width, height, config }) {
    const fontScale = Math.min(width, height) * 0.06 * config.font_size_scale;
    // const divWidth: string = `${width}px`;
    // const divHeight: string = `${height}px`;
    // const fontScale = (originalFontSize / width) * 100;

    return (
        <div className="p-5 max-tablet-lg:p-4 flex flex-1 items-center justify-center bg-bg">
            {/* Use Canvas */}
            <div className=" p-5 max-tablet-lg:p-4 flex flex-1 items-center justify-center bg-bg">
                {" "}
                <div className="relative flex flex-col items-center w-fit">
                    {" "}
                    <img
                        src={Preview}
                        height={height}
                        width={width}
                        className="object-cover"
                    />{" "}
                    <div
                        className="absolute bottom-0 max-w-full text-center"
                        style={{ fontSize: fontScale }}
                    >
                        {" "}
                        The quick fox... that's all I can recall :({" "}
                    </div>{" "}
                </div>{" "}
            </div>
        </div>
    );
}
