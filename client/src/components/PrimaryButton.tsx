export default function PrimaryButton({ text, handleClick, ...props }) {
    return (
        <label
            className="bg-primary py-3 px-10 rounded text-white text-mono-code tracking-wide font-mono text-center"
            onClick={handleClick}
            {...props}
        >
            {text}
        </label>
    );
}
