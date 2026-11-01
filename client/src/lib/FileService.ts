import type { subtitleConfig } from "../types/subtitleConfig";

export class FileService {
    static async Upload(
        config: subtitleConfig,
        fontFile: File,
        videoFile: File
        // id: string
    ) {
        const API: string = "/api";
        const newConfig = JSON.stringify(config);
        const formData = new FormData();

        formData.append("configuration", newConfig);
        formData.append("video_file", videoFile);
        formData.append("font_file", fontFile);

        try {
            const response = await fetch(API, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log("Upload Successful:", data);
        } catch (err) {
            throw new Error("Upload Failed:", err);
        }
    }
}
