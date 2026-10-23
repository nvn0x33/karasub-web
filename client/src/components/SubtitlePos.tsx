const subPositions = [
    // Top Row
    { textValue: "top-left", value: 7 },
    { textValue: "top-center", value: 8 },
    { textValue: "top-right", value: 9 },

    // Middle Row
    { textValue: "middle-left", value: 4 },
    { textValue: "middle-center", value: 5 },
    { textValue: "middle-right", value: 6 },

    // Bottom Row
    { textValue: "bottom-left", value: 1 },
    { textValue: "bottom-center", value: 2 },
    { textValue: "bottom-right", value: 3 },
];

export default function SubtitlePos({ align, setConfig }) {
    return (
        <div>
            {subPositions.map((pos) => (
                <AlignButton
                    textValue={pos.textValue}
                    value={pos.value}
                    setConfig={setConfig}
                    align={align}
                />
            ))}
        </div>
    );
}

function AlignButton({ textValue, value, setConfig, align }) {
    const handleClick = () => {
        setConfig((prev) => ({ ...prev, alignment: textValue }));
    };
    return (
        <button
            className={`${align === textValue ? "bg-primary" : ""}`}
            aria-label={textValue}
            key={textValue + value}
            onClick={handleClick}
        >
            <span></span>
        </button>
    );
}
