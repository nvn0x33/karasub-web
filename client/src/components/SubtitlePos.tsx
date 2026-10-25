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
        <div className="p-2 bg-bg gap-2 grid grid-cols-3 grid-rows-3 outline-2 outline-outline w-fit">
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
        if (align === textValue) {
            return;
        }
        setConfig((prev) => ({ ...prev, alignment: textValue }));
    };
    return (
        <button
            className={`${
                align === textValue ? "bg-primary" : "bg-bg/20"
            } p-3 outline outline-outline rounded`}
            aria-label={textValue}
            key={textValue + value}
            onClick={handleClick}
        >
            <span className=" block p-1 rounded  bg-[#002b75]"></span>
        </button>
    );
}
