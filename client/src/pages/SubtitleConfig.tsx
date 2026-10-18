import ColorRow from "../components/ColorRow";
import { useContext, useState } from "react";
import { ConfigUI } from "../skeletons/ConfigUI";
import { VidList } from "../contexts";
import type { subtitleConfig } from "../types/subtitleConfig";

import FontFamily from "../components/FontFamily";
import FontSizeScaler from "../components/FontSizeScaler";
import PrimaryButton from "../components/PrimaryButton";
import EmphasisControl from "../components/EmphasisControl";
// import FontPreview from "../components/FontPreview";
import { useEffect } from "react";
import TextCase from "../components/TextCase";

export default function SubtitleConfig() {
    const { videos } = useContext(VidList);

    return (
        <section className="flex max-tablet-lg:flex-col h-full">
            {/* {videos.map((video) => (
                <VideoConfig video={video} key={video.id} />
            ))} */}
            <VideoConfig />
        </section>
    );
}

function VideoConfig() {
    const [config, setConfig] = useState<subtitleConfig>({
        highlighted_word_color: "",
        other_word_color: "",
        outline_color: "",
        shadow_color: "",
        outline_enabled: true,
        shadow_enabled: true,
        font_family: "",
        font_size_scale: "",
        bold: false,
        italic: false,
        textcase: "default",
    });
    useEffect(() => {
        console.log(config);
    }, [config]);

    const uploadConfig = () => {};
    return (
        <>
            <div className="flex flex-col p-4 gap-2 justify-between bg-config-bg h-full tablet-lg:w-1/5 min-h-0">
                <div className="flex flex-col gap-8 overflow-y-scroll scrollbar-none min-h-0 p-1">
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
                            TYPOGRAPHY & FORMATTING
                        </h5>
                        <div className="flex flex-col gap-6 ">
                            <FontFamily setConfig={setConfig} />
                            <FontSizeScaler setConfig={setConfig} />
                            <div className="flex gap-2 min-w-0">
                                <EmphasisControl setConfig={setConfig} />
                                <TextCase setConfig={setConfig} />
                            </div>
                        </div>
                    </div>
                </div>
                <PrimaryButton
                    text="GENERATE VIDEO"
                    handleClick={uploadConfig}
                    style={{ paddingInline: 0 }}
                />
            </div>
            <div></div>
            {/* <FontPreview
                width={video.width}
                height={video.height}
                config={config}
                /> */}
        </>
    );
}
