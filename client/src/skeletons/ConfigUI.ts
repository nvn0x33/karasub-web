import type { ConfigUItype } from "../types/skeletons";

export const ConfigUI: ConfigUItype[] = [
    {
        id: "highlight",
        title: "HIGHLIGHTED WORDS",
        rows: [
            {
                id: "highlight-text-color",
                label: "Text Color",
                colors: ["#ffff00", "#87ceeb", "#000000"],
            },
        ],
    },
    {
        id: "other",
        title: "OTHER WORDS",
        rows: [
            {
                id: "other-text-color",
                label: "Text Color",
                colors: ["#ffffff", "#808080", "#000000"],
            },
        ],
    },
    {
        id: "shared-effects",
        title: "SHARED EFFECTS",
        rows: [
            {
                id: "outline-color",
                label: "Outline Color",
                colors: ["#ffffff", "#808080", "#000000"],
            },
            {
                id: "shadow-color",
                label: "Shadow Color",
                colors: ["#000000", "#808080", "#ffffff"],
            },
        ],
    },
];
