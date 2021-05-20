import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Naslovna from "./Slike/DrugiDioNasl.jpg";
import SlikaJedan from "./Slike/prviDio.jpg";
import SlikaDva from "./Slike/drugiDio.jpg";
import SlikaTri from "./Slike/treciDio.jpg";
import Footer from "./Footer";

export default function DrugiDio(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img className="naslovna" src={Naslovna}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About movie</h1>
                <p>
                    Star Wars: Episode II Attack of the Clones is a 2002 film directed by George Lucas and written by Lucas and 
                    Jonathan Hales. It is the second film in the Star Wars prequel trilogy.Attack of the Clones was the first Star Wars
                    film to use a high-definition digital 24-frame system for most of the its live-action scenes. 
                    The film was a financial success, grossing over $600 million at the worldwide box office. However, 
                    for the first time, a Star Wars film did not earn the highest box-office sales for the year; 
                    Attack of the Clones ended up fourth behind The Lord of the Rings: The Two Towers, 
                    Harry Potter and the Chamber of Secrets and Spider-Man.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Characters</h1>
                <ul>
                    <Link to="/LikPet"><li>Mace Windu</li></Link>
                    <Link to="/LikOsam"><li>Obi-Wan Kenobi</li></Link>
                    <Link to="/LikDva"><li>Darth Sidious</li></Link>
                    <Link to="/LikJedanDeset"><li>Padmé Amidala</li></Link>
                    <Link to="/LikJedan"><li>Anakin Skywalker</li></Link>
                    <Link to="/LikDvaDeset"><li>Count Dooku</li></Link>
                    <Link to="/LikSest"><li>Yoda</li></Link>
                </ul>
            </div>
            <div className="sadrzaj">
                <Link to="/Djelovi" className="linkovi"><h1>Films</h1></Link>
                <Link to="/PrviDio">
                    <div className="filmovi">
                        <img src={SlikaJedan} className="dijelovi"/>
                        Star Wars: Episode I – The Phantom Menace
                    </div>
                </Link>
                <Link to="/DrugiDio">
                    <div className="filmovi" id="trenutno">
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