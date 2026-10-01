// font = min(width, height) * 0.06 * Scale;
import { useEffect, useRef } from "react";
import Preview from "../assets/preview-image.webp";

export default function FontPreview({ width, height, config }) {
    const fontScale = Math.min(width, height) * 0.06 * config.font_size_scale;
    const ctxRef = useRef(null);
    // const divWidth: string = `${width}px`;
    // const divHeight: string = `${height}px`;

    useEffect(() => {
        const ctx = ctxRef.current.getContext("2d");
        const img = new Image();

        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height);
        };
        img.src = Preview;
    }, [width, height]);

    return (
        /* Use Canvas */
        <div className="p-5 tablet-lg:h-full flex-1 max-tablet-lg:p-4 flex items-center justify-center bg-bg">
            <canvas
                ref={ctxRef}
                width={width}
                height={height}
                className="max-w-full max-h-full"
            ></canvas>
        </div>
    );
}

{
    /* <div className="relative flex flex-col items-center w-fit">
    <img
        src={Preview}
        height={height}
        width={width}
        className="object-cover"
    />
    <div
        className="absolute bottom-0 max-w-full text-center"
        style={{ fontSize: fontScale }}
    >
        The quick fox... that's all I can recall :(
    </div>
</div> */
}
