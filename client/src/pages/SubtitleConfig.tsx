import ColorRow from "../components/ColorRow";
import { useContext, useState } from "react";
import { ConfigUI } from "../skeletons/ConfigUI";
import { VidList } from "../contexts";
import type { subtitleConfig } from "../types/subtitleConfig";

import FontFamily from "../components/FontFamily";
import FontSizeScaler from "../components/FontSizeScaler";
import PrimaryButton from "../components/PrimaryButton";
import FontPreview from "../components/FontPreview";
// import { useEffect } from "react";

export default function SubtitleConfig() {
    const { videos } = useContext(VidList);

    return (
        <section className="flex flex-1 max-tablet-lg:flex-col">
            {videos.map((video) => (
                <VideoConfig video={video} key={video.id} />
            ))}
        </section>
    );
}

function VideoConfig({ video }) {
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
    // console.log("In the subtitle conf page: " + video.width);
    const uploadConfig = () => {};
    return (
        <div className="flex flex-1 max-tablet-lg:flex-col">
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
            <FontPreview
                width={video.width}
                height={video.height}
                font_scale={config.font_size_scale}
            />
        </div>
    );
}
