// font = min(width, height) * 0.06 * Scale;

export default function FontPreview({ width, height, font_scale }) {
    const font_size: string = `${
        Math.min(width, height) * 0.06 * font_scale
    }px`;
    const divWidth: string = `${width}px`;
    const divHeight: string = `${height}px`;

    return (
        <div className="block p-10 min-w-0">
            <div
                style={{ width: divWidth, height: divHeight }}
                className="bg-amber-800 text-center"
            >
                <span style={{ fontSize: font_size }}>{width}</span>
            </div>
        </div>
    );
}
