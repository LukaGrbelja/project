import React from "react";
import { Link } from "react-router-dom";
import slika from "./Slike/logo.png";
import Forma from "./Forma";

export default function Header(){
    return(
        <div id="header" className="sadrzaj">
            <p id="imePrezime">Luka Grbelja</p>
            <Link to="/"><img id="hSlika" src={slika}/></Link>
            <Forma></Forma>
        </div>
    );
}