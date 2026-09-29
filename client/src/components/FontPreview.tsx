// font = min(width, height) * 0.06 * Scale;

export default function FontPreview({ width, height, font_scale }) {
    const font_size: string = `${
        Math.min(width, height) * 0.06 * font_scale
    }px`;
    const divWidth: string = `${width}px`;
    const divHeight: string = `${height}px`;

    // console.log(width);
    return (
        <div className="flex">
            <div
                style={{ width: divWidth, height: divHeight }}
                className="bg-amber-800 text-center"
            >
                <span style={{ fontSize: font_size }}>{width}</span>
            </div>
        </div>
    );
}
