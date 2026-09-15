import { useState } from "react";

// font = min(width, height) * 0.06 * Scale;
const MAX: number = 5.0;
const MIN: number = 0.1;

export default function FontSizeScaler({ setConfig }) {
    const [value, setValue] = useState<number>(1.0);

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <h6 className="text-size-desc text-headline">
                    Font Size Scale
                </h6>
                <span className="text-primary text-size-desc text-right">
                    {value}x
                </span>
            </div>
            <div className="flex flex-col">
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    step={0.1}
                    value={value}
                    onChange={(e) => {
                        setValue(Number(e.currentTarget.value));
                    }}
                />
            </div>
        </div>
    );
}
