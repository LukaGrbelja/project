import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Naslovna from "./Slike/TreciDioNasl.jpg";
import SlikaJedan from "./Slike/prviDio.jpg";
import SlikaDva from "./Slike/drugiDio.jpg";
import SlikaTri from "./Slike/treciDio.jpg";
import Footer from "./Footer";

export default function TreciDio(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img src={Naslovna}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About movie</h1>
                <p>
                    Star Wars: Episode III Revenge of the Sith is a 2005 film written and directed by George Lucas. 
                    It is the third and final film in the Star Wars prequel trilogy.
                    Revenge of the Sith was released in theaters on Thursday, May 19, 2005 
                    (the same day that the first episode of the prequel trilogy The Phantom Menace was released in 1999), 
                    and premiered (out of competition) on the 2005 Cannes Festival May 15. 
                    The film was generally positively received by critics, especially in comparison to the two previous prequels. 
                    It broke several box office records in its opening week and went on to earn over US $800 million worldwide, 
                    making it one of the top-grossing movies of 2005. 
                    It is the second Star Wars film which used a high-definition digital 24 frame system for most of the movie's 
                    live-action scenes.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Glavni likovi</h1>
                <ul>
                    <Link to="/LikPet"><li>Mace Windu</li></Link>
                    <Link to="/LikOsam"><li>Obi-Wan Kenobi</li></Link>
                    <Link to="/LikDva"><li>Darth Sidious</li></Link>
                    <Link to="/LikJedanDeset"><li>Padmé Amidala</li></Link>
                    <Link to="/LikJedan"><li>Anakin Skywalker</li></Link>
                    <Link to="/LikDeset"><li>General Grievous</li></Link>
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
                    <div className="filmovi">
                        <img src={SlikaDva} className="dijelovi"/>
                        Star Wars: Episode II – Attack of the Clones
                    </div>
                </Link>
                <Link to="/TreciDio">
                    <div className="filmovi" id="trenutno">
                        <img src={SlikaTri} className="dijelovi"/>
                        Star Wars: Episode III – Revenge of the Sith
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}