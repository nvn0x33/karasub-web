import type { subtitleConfig } from "../types/subtitleConfig";

export class FileService {
    static API: string = "/api";
    static async Upload(
        config: subtitleConfig,
        fontFile: File,
        videoFile: File
    ) {
        const newConfig = JSON.stringify(config);
        const formData = new FormData();

        formData.append("config", newConfig);
        formData.append("video_file", videoFile);
        formData.append("font_file", fontFile);

        try {
            const response = await fetch(this.API, {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error(
                    `Upload failed with status: ${response.status}`
                );
            }
            const data = await response.json();
            console.log("Upload Successful:", data);

            return data.job_id;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    static async status(job_id: string) {
        try {
            const response = await fetch(this.API + `/jobs/${job_id}/status`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`Check failed with status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Check Successful:", data);

            return data.status;
        } catch (err) {
            console.log(err);
            return "failed";
        }
    }
}
