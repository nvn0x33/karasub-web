import ColorRow from "../components/ColorRow";
import { useState } from "react";
import { ConfigUI } from "../skeletons/ConfigUI";
import type { subtitleConfig } from "../types/subtitleConfig";
import FontFamily from "../components/FontFamily";
import FontSizeScaler from "../components/FontSizeScaler";
import PrimaryButton from "../components/PrimaryButton";
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

    const uploadConfig = () => {};

    // useEffect(() => {
    //     console.log(config);
    // }, [config]);

    return (
        <section className="flex flex-1 max-tablet-lg:flex-col">
            <div className="flex flex-col justify-between p-4 bg-config-bg max-tablet-lg:flex-1 tablet-lg:w-1/5">
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
                        <FontSizeScaler setConfig={setConfig} />
                    </div>
                </div>
                <PrimaryButton
                    text="GENERATE VIDEO"
                    handleClick={uploadConfig}
                    style={{ paddingInline: 0 }}
                />
            </div>
            <div className="image-preview"></div>
        </section>
    );
}
