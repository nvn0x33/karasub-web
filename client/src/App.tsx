import { useState } from "react";
import { PageContext, VidList } from "./contexts";

import Header from "./components/Header";
import UploadScreen from "./pages/UploadScreen";
import SubtitleConfig from "./pages/SubtitleConfig";

const pages: string[] = ["upload", "config", "processing", "download"];

function App() {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [videos, setVideos] = useState([]);

    const changePage = () => {
        setPageIndex((prev) => {
            if (prev === pages.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };
    return (
        <div className="flex flex-col h-dvh">
            <Header />
            <PageContext value={changePage}>
                <VidList value={{ videos, setVideos }}>
                    <main className="outline outline-outline flex flex-col flex-1">
                        {pages[pageIndex] === "upload" && <UploadScreen />}
                        {pages[pageIndex] === "config" && <SubtitleConfig />}
                        {/* <SubtitleConfig /> */}
                    </main>
                </VidList>
            </PageContext>
        </div>
    );
}

export default App;
