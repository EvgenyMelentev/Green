import React from "react"

export function Modal({children,visible,setVisible }){
    return(
        <>
        {/* <div className={`modal ${visible == true ? 'active':''}`} onClick={()=>{setVisible(false)}}> */}
        <div className={`modal ${visible == true ? 'active':''}`}>
            <div className="modalContent " onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>

        </div>
        </>
    )
}