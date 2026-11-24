export default function FileHandler({ isFileUploaded }) {
    if (isFileUploaded) {
        return (
            <div className="p-8 bg-config-bg">
                <h3 className="text-desc">
                    Video is processing!
                    <br />
                    Please Wait...
                </h3>
            </div>
        );
    }
}
