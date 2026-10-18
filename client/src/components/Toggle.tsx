import { useState, useEffect } from "react";

export default function Toggle({ setConfig, target }) {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const handleChange = (e) => {
        setIsCheck(e.target.checked);
        console.log(target);
    };
    useEffect(() => {
        setConfig((prev) => ({ ...prev, [target]: isCheck }));
    }, [setConfig, isCheck, target]);
    return (
        <label
            className="relative inline-block w-10 h-6 bg-primary/40 rounded-full cursor-pointer transition-colors duration-300 has-checked:bg-primary
  after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:bg-white after:rounded-full after:transition-transform after:duration-300 has-checked:after:translate-x-4"
        >
            {/* {state === true ? (
                <input type="checkbox" className="sr-only" checked />
            ) : (
            )} */}
            <input
                type="checkbox"
                className="sr-only"
                onChange={handleChange}
            />
        </label>
    );
}
