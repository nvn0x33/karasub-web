export default function ColorButton({ color }: { color: string }) {
    return (
        <button
            style={{ backgroundColor: color }}
            className={`p-4 rounded outline outline-outline`}
            key={color}
            id={`${color}-button`}
        ></button>
    );
}
