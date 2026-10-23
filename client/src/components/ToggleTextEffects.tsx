const TEXT_EFFECTS = [
    {
        id: 1,
        name: "Outline",
        target: "outline_enabled",
    },
    {
        id: 2,
        name: "Shadow",
        target: "shadow_enabled",
    },
];

export default function ToggleTextEffects({ setConfig }) {
    const handleChange = (e, target: string) => {
        setConfig((prev) => ({ ...prev, [target]: e.target.checked }));
    };
    return (
        <div className="flex gap-6">
            {TEXT_EFFECTS.map((effect) => (
                <div className="flex gap-2" key={effect.id}>
                    <h6 className="text-size-desc text-headline">
                        {effect.name}
                    </h6>
                    <label
                        className="relative inline-block w-10 h-6 bg-primary/40 rounded-full cursor-pointer transition-colors duration-300 has-checked:bg-primary
  after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:bg-white after:rounded-full after:transition-transform after:duration-300 has-checked:after:translate-x-4"
                    >
                        <input
                            type="checkbox"
                            className="sr-only"
                            onChange={(e) => {
                                handleChange(e, effect.target);
                            }}
                        />
                    </label>
                </div>
            ))}
        </div>
    );
}
