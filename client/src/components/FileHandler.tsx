import { useEffect, useState } from "react";
import { FileService } from "../lib/FileService";

export default function FileHandler({ isFileUploaded, JOB_ID }) {
    const [videoStatus, setVideoStatus] = useState<string>("processing");
    useEffect(() => {
        if (!JOB_ID) return;

        const intervalID = setInterval(async () => {
            const status = await FileService.status(JOB_ID);
            if (status !== "done" && status !== "failed") return;

            setVideoStatus(status);
            clearInterval(intervalID);
        }, 10000);
    }, [JOB_ID]);

    if (!isFileUploaded) return null;

    const statusContent = {
        processing: (
            <h3 className="text-desc">
                Video is processing!
                <br />
                Please Wait...
            </h3>
        ),
        done: (
            <>
                <h3 className="text-desc">Video is ready to download!</h3>
                an anchor tag with link
            </>
        ),
        failed: (
            <h3 className="text-desc">
                This video processing has been failed! Maybe missing job_id or
                something else went wrong. Please retry!!
            </h3>
        ),
    };

    return statusContent[videoStatus] ? (
        <div className="p-8 bg-config-bg">{statusContent[videoStatus]}</div>
    ) : null;
}
