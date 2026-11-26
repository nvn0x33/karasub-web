import { useEffect, useState } from "react";
import { FileService } from "../lib/FileService";

export default function FileHandler({ isFileUploaded, JOB_ID }) {
    const [videoStatus, setVideoStatus] = useState<string>("processing");
    useEffect(() => {
        if (!JOB_ID) return;

        const intervalID = setInterval(async () => {
            const status = await FileService.status(JOB_ID);
            if (status !== "done" || status !== "failed") return;

            setVideoStatus(status);
            clearInterval(intervalID);
        }, 10000);
    }, [JOB_ID]);

    // Put is FIle Uploaded variable in parent only then call this component
    if (isFileUploaded && videoStatus === "processing") {
        return (
            <div className="p-8 bg-config-bg">
                <h3 className="text-desc">
                    Video is processing!
                    <br />
                    Please Wait...
                </h3>
            </div>
        );
    } else if (isFileUploaded && videoStatus === "done") {
        return (
            <div className="p-8 bg-config-bg">
                <h3 className="text-desc">Video is ready to download!</h3>
                an anchor tag with link
            </div>
        );
    } else if (isFileUploaded && videoStatus === "failed") {
        return (
            <div className="p-8 bg-config-bg">
                <h3 className="text-desc">
                    This video processing has been failed! Maybe missing job_id
                    or something else went wrong. Please retry!!
                </h3>
            </div>
        );
    }
}
