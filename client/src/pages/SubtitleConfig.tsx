import ColorRow from "../components/ColorRow";
import { useState } from "react";
import { ConfigUI } from "../skeletons/ConfigUI";
import type { subtitleConfig } from "../types/subtitleConfig";
import FontFamily from "../components/FontFamily";
// import { useEffect } from "react";

export default function SubtitleConfig() {
    const [config, setConfig] = useState<subtitleConfig>({
        highlighted_word_color: "",
        highlighted_word_outline_color: "",
        other_word_color: "",
        other_word_outline_color: "",
        font_family: "",
        font_size_scale: "",
    });

    // useEffect(() => {
    //     console.log(config);
    // }, [config]);

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
                {/* typography */}
                <div>
                    <h5 className="mb-2 text-mono-label text-desc font-mono font-medium">
                        TYPOGRAPHY
                    </h5>
                    <div className="flex flex-col gap-4">
                        <FontFamily setConfig={setConfig} />
                        <div className="flex flex-col gap-1">
                            <h6 className="text-size-desc text-headline">
                                Font Size Scale
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-preview"></div>
        </section>
    );
}
