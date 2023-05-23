import { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import { ContactCard } from "./ContactCard";


export function Contacts(){
    const phones = useContext(Context);
    const checkPhone = (number) => {
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        let result = regex.test(number);
        if (result) {
          let phoneNumber = number.replace(/[^0-9, ]/g, "");
    
          if (phoneNumber[0] === "8") {
            phoneNumber = phoneNumber.replace("8", "7");
          }
          phoneNumber = +phoneNumber;
           phones.dispatch({
            type: 'add',
            payload: phoneNumber,
          })
          setPhone("")
        } else {
          console.log("Not valid", result);
        }
      };
      const [phone, setPhone] = useState("");
             
    return(
        <div className="contacts">
          <div className="contacts_container">
            <div className="user_contact">
              <div className="user_contact_container">
                <button
                  className="user_contact_button"
                  onClick={() => checkPhone(phone)}
                >
                  <span>
                    <svg
                      fill="green"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                    >
                      <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                  </span>
                </button>
                <input
                  type="text"
                  placeholder="Введите номер"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            {phones.state.map((item, index) => {
              return (
                <ContactCard item={item} key={index} index={index}/>
                              );
            })}
                      </div>
        </div>
 
    )
}