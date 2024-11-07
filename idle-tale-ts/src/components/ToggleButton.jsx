import { useState } from "react";

const ToggleButton = ({setOuterToggle}) => {
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
        setOuterToggle(!isToggled);
    }

    return (
        <button value={isToggled} onClick={handleToggle}>
            {isToggled ? 'YES' : 'NO'}
        </button>
    )
}

export default ToggleButton;