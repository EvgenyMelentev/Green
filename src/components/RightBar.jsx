import { useState } from "react";
import { Message } from "./rightbar/Message";
import { MessageBar } from "./rightbar/MessageBar";
import { RightHeader } from "./rightbar/RightHeader";


export function RightBar(){
    const [send, setSend] = useState(false)
    return (
        <div className="right_bar">
            <RightHeader/>
          <div className="content">
            <Message send={send}/>
            <MessageBar setSend={setSend}/>
          </div>
        </div>
    )

}