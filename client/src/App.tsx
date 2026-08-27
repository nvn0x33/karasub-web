import { useState } from "react";
import { PageContext } from "./contexts";

import Header from "./components/Header";
import UploadScreen from "./components/UploadScreen";

const pages: string[] = ["upload", "config", "processing", "download"];

function App() {
    const [pageIndex, setPageIndex] = useState<number>(0);

    const changePage = () => {
        setPageIndex((prev) => {
            if (prev === pages.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };
    return (
        <>
            <Header />
            <PageContext value={changePage}>
                <main className="outline outline-outline">
                    {pages[pageIndex] === "upload" && <UploadScreen />}
                </main>
            </PageContext>
        </>
    );
}

export default App;
