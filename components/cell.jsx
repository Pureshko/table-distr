import { useCallback, useState } from 'react';

export const Cell = ({slot, className}) => {
    const [isLocked, setIsLocked] = useState(false);
    const [color, setColor] = useState("bg-green-200");
    const [locked, setLocked] = useState("");
    
    return <td className={"slot " + className} data-swapy-slot={slot}><div className={color + " resize item " + locked}  data-swapy-item={slot}><div>Govno</div></div></td>
}