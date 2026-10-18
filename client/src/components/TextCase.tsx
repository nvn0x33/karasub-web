const TEXT_CASES = [
    {
        displayName: "Default",
        value: "default",
    },
    {
        displayName: "UpperCase",
        value: "uppercase",
    },
    {
        displayName: "LowerCase",
        value: "lowercase",
    },
];

export default function TextCase({ setConfig }) {
    const handleChange = (e) => {
        setConfig((prev) => ({ ...prev, textcase: e.value }));
    };
    return (
        <div className="flex flex-col gap-2 flex-1 min-w-0">
            <h6 className="text-size-desc text-headline">
                <label htmlFor="text-case">Text Case</label>
            </h6>
            <select
                onChange={handleChange}
                id="text-case"
                className="text-size-desc border-2 border-outline p-1 text-desc bg-config-bg"
            >
                {TEXT_CASES.map((textCase, index: number) => (
                    <option
                        className="text-size-desc"
                        value={textCase.value}
                        key={index}
                    >
                        {textCase.displayName}
                    </option>
                ))}
            </select>
        </div>
    );
}
