export default function ColorRow({ text, colors }) {
    return (
        <div>
            <h6>{text}</h6>
            <div>
                {colors.map((color) => (
                    <button
                        className={`p-4 bg-[${color}]`}
                        key={color}
                        id={`${color}-button`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
