// font = min(width, height) * 0.06 * Scale;
import { useEffect, useRef } from "react";
import { drawText } from "canvas-txt";
import Preview from "../assets/preview-image.webp";
import type { subtitleConfig } from "../types/subtitleConfig";

function formatText(text: string, casing: string) {
    if (casing === "uppercase") text = text.toUpperCase();
    else if (casing === "lowercase") text = text.toLowerCase();
    return text;
}

export default function FontPreview({
    width,
    height,
    config,
}: {
    width: number;
    height: number;
    config: subtitleConfig;
}) {
    const ctxRef = useRef(null);

    const fontScale: number =
        Math.min(width, height) * 0.06 * config.font_size_scale;
    const strokeWidth: number = 0.02 * fontScale;

    const [vAlign, hAlign] = config.alignment.split("-") as [
        "top" | "middle" | "bottom",
        "left" | "center" | "right"
    ];

    useEffect(() => {
        const ctx = ctxRef.current.getContext("2d");
        const img = new Image();
        const marginX: number = 10;
        const marginY: number = 30;

        const textConfig = {
            x: marginX,
            y: marginY,
            height: ctxRef.current.height - marginY * 2,
            width: ctxRef.current.width - marginX * 2,
            vAlign: vAlign,
            align: hAlign,
            fontSize: fontScale,
            font: "Inter",
            fontWeight: config.bold ? "bold" : "",
            fontStyle: config.italic ? "italic" : "",
            style: {
                fill: config.other_word_color || "black",
                strokeWidth: config.outline_enabled ? strokeWidth : 0,
                // stroke: config.outline_enabled ? config.outline_color : "",
            },
        } as const;

        // let text: string = "The quick brown fox jumps over the lazy dog.";
        const text: string = formatText(
            "The quick brown fox jumps over the lazy dog.",
            config.textcase
        );

        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height);
            drawText(ctx, text, textConfig);
        };
        img.src = Preview;
    }, [width, height, fontScale, config, strokeWidth, vAlign, hAlign]);

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
