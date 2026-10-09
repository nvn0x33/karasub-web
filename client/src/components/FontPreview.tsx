// font = min(width, height) * 0.06 * Scale;
import { useEffect, useRef } from "react";
import { drawText } from "canvas-txt";
import Preview from "../assets/preview-image.webp";

export default function FontPreview({ width, height, config }) {
    const fontScale = Math.min(width, height) * 0.06 * config.font_size_scale;
    const ctxRef = useRef(null);

    useEffect(() => {
        const ctx = ctxRef.current.getContext("2d");
        const img = new Image();

        const textConfig = {
            x: 0,
            y: 10,
            height: ctxRef.current.height - 20,
            width: ctxRef.current.width - 20,
            align: "center",
            vAlign: "bottom",
            fontSize: fontScale,
            style: {
                fill: config.other_word_color || "black",
            },
        } as const;
        console.log("other word color = ", config.other_word_color);
        const text: string = "The quick brown fox jumps over the lazy dog.";

        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height);
            drawText(ctx, text, textConfig);
        };
        img.src = Preview;
    }, [width, height, fontScale, config]);

    return (
        /* Use Canvas */
        <div className="p-5 tablet-lg:h-full flex-1 max-tablet-lg:p-4 flex items-center justify-center bg-bg">
            <canvas
                ref={ctxRef}
                width={width}
                height={height}
                className="max-h-full max-w-full"
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
