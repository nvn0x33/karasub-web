import type { ConfigUItype } from "../types/skeletons";

export const ConfigUI: ConfigUItype[] = [
    {
        id: "highlight",
        title: "HIGHLIGHTED WORDS",
        rows: [
            {
                id: "highlight-text",
                label: "Text Color",
                colors: ["#ffff00", "#87ceeb", "#000000"],
            },
            {
                id: "highlight-outline",
                label: "Outline Color",
                colors: ["#000000", "#808080", "#ffffff"],
            },
        ],
    },
    {
        id: "other",
        title: "OTHER WORDS",
        rows: [
            {
                id: "other-text",
                label: "Text Color",
                colors: ["#ffffff", "#808080", "#000000"],
            },
            {
                id: "other-outline",
                label: "Outline Color",
                colors: ["#000000", "#808080", "#ffffff"],
            },
        ],
    },
];
