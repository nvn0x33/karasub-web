import ColorRow from "../components/ColorRow";
import { useState } from "react";

const ConfigUI = [
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

export default function SubtitleConfig() {
    const [config, setConfig] = useState({
        highlighted_word_color: "",
        highlighted_word_outline_color: "",
        other_word_color: "",
        other_word_outline_color: "",
        font_family: "",
        font_size_scale: "",
    });

    return (
        <section className="flex flex-1">
            <div className="flex flex-1 flex-col justify-between p-4 bg-config-bg">
                {ConfigUI.map((section) => (
                    <div key={section.id}>
                        <h5 className="mb-2 text-mono-label text-desc font-mono font-medium">
                            {section.title}
                        </h5>

                        <div className="flex flex-col gap-2">
                            {section.rows.map((row) => (
                                <ColorRow
                                    id={row.id}
                                    key={row.id}
                                    text={row.label}
                                    colors={row.colors}
                                    setConfig={setConfig}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                {/* <div className="flex justify-between">
                    <h5 className="font-mono text-mono-label text-desc">
                        HIGHLIGHTED WORD
                    </h5>
                    <div className="flex gap-4">
                        <ColorRow
                            text="Text Color"
                            colors={HIGHLIGHTED_COLORS.row1}
                        />
                        <ColorRow
                            text="Outline Color"
                            colors={HIGHLIGHTED_COLORS.row2}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <h5 className="font-mono text-mono-label text-desc">
                        HIGHLIGHTED WORD
                    </h5>
                    <div className="flex gap-4">
                        <ColorRow
                            text="Text Color"
                            colors={HIGHLIGHTED_COLORS.row1}
                        />
                        <ColorRow
                            text="Outline Color"
                            colors={HIGHLIGHTED_COLORS.row2}
                        />
                    </div>
                </div> */}
            </div>
            <div className="image-preview"></div>
        </section>
    );
}
