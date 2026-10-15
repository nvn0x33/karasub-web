import { useEffect, useState } from "react";

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
export default function EmphasisControl({ setConfig }) {
    return (
        <div className="flex gap-1">
            {Controls.map((control) => (
                <Control
                    setConfig={setConfig}
                    key={control.id}
                    text={control.text}
                    target={control.target}
                    styleCSS={control.styleCSS}
                />
            ))}
        </div>
    );
}

function Control({ text, styleCSS, setConfig, target }) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    useEffect(() => {
        setConfig((prev) => ({ ...prev, [target]: isActive }));
    }, [isActive, target, setConfig]);

    return (
        <button
            className={`${
                isActive === true ? "bg-primary" : ""
            }  text-headline px-6 py-1 rounded-xs outline outline-outline`}
            style={styleCSS}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}
