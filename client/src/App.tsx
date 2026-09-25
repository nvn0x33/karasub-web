import { useState } from "react";
import { PageContext, VidResolution } from "./contexts";

import Header from "./components/Header";
import UploadScreen from "./pages/UploadScreen";
import SubtitleConfig from "./pages/SubtitleConfig";

const pages: string[] = ["upload", "config", "processing", "download"];

function App() {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [resolution, setResolution] = useState({ width: 0, height: 0 });

    const changePage = () => {
        setPageIndex((prev) => {
            if (prev === pages.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };
    return (
        <div className="flex flex-col min-h-dvh">
            <Header />
            <PageContext value={changePage}>
                <VidResolution value={{ resolution, setResolution }}>
                    <main className="outline outline-outline flex flex-col flex-1">
                        {pages[pageIndex] === "upload" && <UploadScreen />}
                        {pages[pageIndex] === "config" && <SubtitleConfig />}
                        {/* <SubtitleConfig /> */}
                    </main>
                </VidResolution>
            </PageContext>
        </div>
    );
}

export default App;
