import { useEffect, useRef, useState } from "react";
import { LeftBar } from "./LeftBar";
import { RightBar } from "./RightBar";
      
      
    export  function MainScreen(){

       
         

      return (
      <div className="main_screen">
        <LeftBar/>
        <RightBar/>
      </div>

      )}