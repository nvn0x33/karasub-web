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
        ],
    },
    {
        id: "shared-effects",
        title: "SHARED EFFECTS",
        rows: [
            {
                id: "outline",
                label: "Outline",
                colors: ["#ffffff", "#808080", "#000000"],
            },
            {
                id: "shadow",
                label: "Shadow",
                colors: ["#000000", "#808080", "#ffffff"],
            },
        ],
    },
];
