export default function ColorButton({ color }) {
    // const bgColor: string = `bg-${color}`;
    return (
        <button
            style={{ backgroundColor: color }}
            className={`p-4`}
            key={color}
            id={`${color}-button`}
        ></button>
    );
}
