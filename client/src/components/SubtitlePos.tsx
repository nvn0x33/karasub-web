const subPositions = [
    // Top Row
    { textValue: "Top-Left", value: 7 },
    { textValue: "Top-Center", value: 8 },
    { textValue: "Top-Right", value: 9 },

    // Middle Row
    { textValue: "Middle-Left", value: 4 },
    { textValue: "Middle-Center", value: 5 },
    { textValue: "Middle-Right", value: 6 },

    // Bottom Row
    { textValue: "Bottom-Left", value: 1 },
    { textValue: "Bottom-Center", value: 2 },
    { textValue: "Bottom-Right", value: 3 },
];

export default function SubtitlePos({}) {
    return (
        <div>
            {subPositions.map((pos) => (
                <button
                    aria-label={pos.textValue}
                    key={pos.textValue + pos.value}
                >
                    <span></span>
                </button>
            ))}
        </div>
    );
}
