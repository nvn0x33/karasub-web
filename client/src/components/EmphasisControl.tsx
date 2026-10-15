import { useState } from "react";

const Controls = [
    {
        id: "bold",
        text: "B",
        styleCSS: { fontWeight: "bold" },
    },
    {
        id: "italic",
        text: "I",
        styleCSS: { fontStyle: "italic" },
    },
];
export default function EmphasisControl() {
    return (
        <div className="flex gap-1">
            {Controls.map((control) => (
                <Control
                    key={control.id}
                    text={control.text}
                    styleCSS={control.styleCSS}
                />
            ))}
            {/* <Bold />
            <Italic /> */}
        </div>
    );
}

function Control({ text, styleCSS }) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
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

// function Bold() {
//     const [isBold, setIsBold] = useState<boolean>(false);

//     const handleClick = () => {
//         setIsBold(true);
//     };
//     return (
//         <button
//             className={`${
//                 isBold === true ? "bg-primary" : ""
//             }  text-desc font-bold`}
//             onClick={handleClick}
//         >
//             B
//         </button>
//     );
// }
// function Italic() {
//     const [isItalic, setIsItalic] = useState<boolean>(false);

//     const handleClick = () => {
//         setIsItalic(true);
//     };
//     return (
//         <button
//             className={`${
//                 isItalic === true ? "bg-primary" : ""
//             }  text-desc italic`}
//             onClick={handleClick}
//         >
//             I
//         </button>
//     );
// }
