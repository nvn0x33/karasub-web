const Controls = [
    {
        id: "bold",
        text: "B",
        styleCSS: { fontWeight: "bold" },
        target: "bold",
    },
    {
        id: "italic",
        text: "I",
        styleCSS: { fontStyle: "italic" },
        target: "italic",
    },
];
export default function EmphasisControl({ config, setConfig }) {
    const handleClick = (target) => {
        setConfig((prev) => ({ ...prev, [target]: !prev[target] }));
    };

    return (
        <div className="flex flex-col gap-2 flex-1">
            <h6 className="text-size-desc text-headline">Style</h6>
            <div className="flex gap-1">
                {Controls.map((control) => (
                    <button
                        key={control.id}
                        type="button"
                        aria-pressed={config[control.target]}
                        onClick={() => handleClick(control.target)}
                        style={control.styleCSS}
                        className={`${
                            config[control.target] ? "bg-primary" : ""
                        } text-headline py-1 rounded-xs outline outline-outline flex-1 min-w-0`}
                    >
                        {control.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
