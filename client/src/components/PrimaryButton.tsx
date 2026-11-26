export default function PrimaryButton({ text, handleClick, ...props }) {
    return (
        <button
            className="bg-primary py-3 px-8 rounded text-white text-mono-label font-bold tracking-wide font-mono text-center cursor-pointer transition-all duration-150 hover:brightness-110 active:scale-95 active:brightness-90"
            onClick={handleClick}
            {...props}
        >
            {text}
        </button>
    );
}
