import React ,{useState}from "react";
import { useDispatch } from "react-redux";
import {changeColor} from './features/theme'
function ColorSelector(){
    const [color,setColor] =useState('red')
    const dispatch =useDispatch()
    return(
        <div>
<input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <button onClick={()=> dispatch(changeColor(color))}>changeColor</button>
        </div>
    )
}

export default ColorSelector;