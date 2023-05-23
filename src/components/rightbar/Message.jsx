import { useEffect, useRef, useState, useContext } from "react";
import Context from "../Context";
import takeMessage from "./takeMessage";
export function Message(props) {
  const phones = useContext(Context);
  const [letters, setLetters] = useState([]);
  const scroll = useRef(null);
  const pos = useRef(null);
  useEffect(() => {
    pos.current.scrollTo(0, 100000);

  }, [phones.item, props.send, letters]);
  useEffect(() => {
    takeMessage(phones.state[phones.item], phones.account.idInstance, phones.account.apiTokenInstance, setLetters)
  }, [phones.item, props.send])

  return (
    <div className="message">
      <div className="messages_income" ref={pos}>
        {letters.reverse().map((item) => {
          if (item.type === "incoming") {
            return (
              <div className="row" key={item.idMessage}>
                <div className="row_text incoming_message">
                  <p>
                    {item.textMessage}
                    {/* <span className="time">12.00</span> */}
                  </p>
                </div>
              </div>
            )
          } else if (item.type === 'outgoing') {
            return (
              <div className="row my_message" key={item.idMessage}>
                <div className="row_text ">
                  <p>
                    {item.textMessage}
                    {/* <span className="time">12.00</span> */}
                  </p>
                </div>
              </div>
            )
          }
        })}

        <div ref={scroll} className="Begin"></div>
      </div>
    </div>
  )
}