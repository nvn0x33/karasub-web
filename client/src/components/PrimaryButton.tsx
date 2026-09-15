export default function PrimaryButton({ text, handleClick, ...props }) {
    return (
        <button
            className="bg-primary py-3 px-8  rounded text-white text-mono-code tracking-wide font-mono text-center"
            onClick={handleClick}
            {...props}
        >
            {text}
        </button>
    );
}
