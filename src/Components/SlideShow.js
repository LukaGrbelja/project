import React, { useState, useEffect } from "react";

export default function Slideshow({prva,druga,treca}) {
    let [count, setCount] = useState(0);
    
    useEffect(() => {
      let prvaSlika = document.getElementsByTagName("img")[1];
      let drugaSlika = document.getElementsByTagName("img")[2];
      let trecaSlika = document.getElementsByTagName("img")[3];
      if(count == 3){
          count = 0;
      }
      if(count == -1){
          count = 2;
      }
      if(count == 0){
        prvaSlika.className="aktivno";
        drugaSlika.className="skriveno";
        trecaSlika.className="skriveno";
      }
      else if(count == 1){
        prvaSlika.className="skriveno";
        drugaSlika.className="aktivno";
        trecaSlika.className="skriveno";
      }
      else{
        prvaSlika.className="skriveno";
        drugaSlika.className="skriveno";
        trecaSlika.className="aktivno";
      }
    });
  
    return (
      <div id="slideshow">
      <div>
      <button onClick={() => setCount(count - 1)}>
      &#10094; Past
      </button>
      <button onClick={() => setCount(count + 1)}>
      &#10095; Next
      </button>
      </div>
        <img src={prva} className="aktivno"/>
        <img src={druga} className="skriveno"/>
        <img src={treca} className="skriveno"/>
      </div>
    );
  }