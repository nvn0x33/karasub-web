export default function PrimaryButton({ text, handleClick, ...props }) {
    return (
        <label
            className="bg-primary py-3 px-10 rounded text-white text-size-desc tracking-wide font-mono"
            onClick={handleClick}
            {...props}
        >
            {text}
        </label>
    );
}
