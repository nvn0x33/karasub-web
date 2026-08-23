import Header from "./components/Header";
import UploadScreen from "./components/UploadScreen";

function App() {
    return (
        <>
            <Header />
            <main className="outline outline-outline">
                <UploadScreen />
            </main>
        </>
    );
}

export default App;
