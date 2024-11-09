import { Dispatch, SetStateAction, useState } from "react";

interface ToggleButton {
    isToggled: boolean,
    setToggle: Dispatch<SetStateAction<boolean>>
}

const ToggleButton: React.FC<ToggleButton> = (
    {isToggled, setToggle}
) => {

    const handleToggle = () => {
        setToggle(!isToggled);
    }

    return (
        <button onClick={handleToggle}>
            {isToggled ? 'YES' : 'NO'}
        </button>
    )
}

export default ToggleButton;