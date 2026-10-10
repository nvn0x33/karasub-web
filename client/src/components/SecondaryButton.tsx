export default function SecondaryButton({ text, handleClick, ...props }) {
    return (
        <button
            className="bg-secondary rounded-xs py-2 px-3 text-white text-[0.7rem] tracking-wide font-mono text-center"
            onClick={handleClick}
            {...props}
        >
            {text}
        </button>
    );
}
