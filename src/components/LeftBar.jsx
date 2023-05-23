import { Contacts } from "./leftbar/Contacts";
import { LeftHeader } from "./leftbar/LeftHeader";



export function LeftBar(){

    return (
        <div className="left_bar">
            <LeftHeader/>
            <Contacts/>
             </div>
    )
}