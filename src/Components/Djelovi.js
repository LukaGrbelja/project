import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SlikaJedan from "./Slike/prviDio.jpg";
import SlikaDva from "./Slike/drugiDio.jpg";
import SlikaTri from "./Slike/treciDio.jpg";

export default function Djelovi(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <Link to="/PrviDio">
                    <div className="filmovi">
                        <img src={SlikaJedan} className="dijelovi"/>
                        Star Wars: Episode I – The Phantom Menace
                    </div>
                </Link>
                <Link to="/DrugiDio">
                    <div className="filmovi">
                        <img src={SlikaDva} className="dijelovi"/>
                        Star Wars: Episode II – Attack of the Clones
                    </div>
                </Link>
                <Link to="/TreciDio">
                    <div className="filmovi">
                        <img src={SlikaTri} className="dijelovi"/>
                        Star Wars: Episode III – Revenge of the Sith
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}