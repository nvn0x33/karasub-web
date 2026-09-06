import ColorRow from "../components/ColorRow";

const ConfigUI = [
    {
        id: "highlighted",
        title: "HIGHLIGHTED WORDS",
        rows: [
            {
                id: 1,
                label: "Text Color",
                colors: ["#ffff00", "#87ceeb", "#000000"],
            },
            {
                id: 2,
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
                id: 1,
                label: "Text Color",
                colors: ["#ffffff", "#808080", "#000000"],
            },
            {
                id: 2,
                label: "Outline Color",
                colors: ["#000000", "#808080", "#ffffff"],
            },
        ],
    },
];

// const HIGHLIGHTED_COLORS = {
//     row1: ["#ffff00", "#87ceeb", "#000000"],
//     row2: ["#000000", "#808080", "#ffffff"],
// };

// const OTHER_COLORS = {
//     row1: ["#ffffff", "#808080", "#000000"],
//     row2: ["#000000", "#808080", "#ffffff"],
// };

export default function SubtitleConfig() {
    return (
        <section className="flex flex-1">
            <div>
                {ConfigUI.map((section) => (
                    <div key={section.id}>
                        <h5>{section.title}</h5>
                        {section.rows.map((row) => (
                            <ColorRow
                                key={row.id}
                                text={row.label}
                                colors={row.colors}
                            />
                        ))}
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
