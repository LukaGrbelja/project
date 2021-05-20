import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Naslovna from "./Slike/PrviDioNasl.jpg";
import SlikaJedan from "./Slike/prviDio.jpg";
import SlikaDva from "./Slike/drugiDio.jpg";
import SlikaTri from "./Slike/treciDio.jpg";
import Footer from "./Footer";

export default function PrviDio(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img className="naslovna" src={Naslovna}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About movie</h1>
                <p>
                Star Wars: Episode I The Phantom Menace is a 1999 film written and directed by George Lucas and
                produced by Rick McCallum. It is the first film in the Star Wars prequel trilogy.
                The Phantom Menace was released in theaters on May 19, 1999, becoming the first Star Wars film since Star Wars: 
                Episode VI Return of the Jedi, which was released sixteen years earlier. 
                The release was accompanied by extensive media coverage and great fan anticipation. 
                Despite mixed reviews from critics and fans, the film grossed $924.3 million worldwide, 
                making it the second highest-grossing Star Wars film when unadjusted for inflation. 
                It was re-released on Blu-ray in September 2011, and was re-released in theaters in 3D on February 10, 2012.
                The film was the catalyst for fifteen years of Star Wars storytelling that would primarily take place around the time 
                of the prequel storyline. The success of the film allowed for the next two chapters of the prequel trilogy, 
                as well as the Star Wars: The Clone Wars film and television series.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Characters</h1>
                <ul>
                    <Link to="/LikDevet"><li>Qui-Gon Jinn</li></Link>
                    <Link to="/LikOsam"><li>Obi-Wan Kenobi</li></Link>
                    <Link to="/LikCetiri"><li>Viceroy Nute Gunray</li></Link>
                    <Link to="/LikDva"><li>Darth Sidious</li></Link>
                    <Link to="/LikJedanDeset"><li>Padmé Amidala</li></Link>
                    <Link to="/LikJedan"><li>Anakin Skywalker</li></Link>
                    <Link to="/LikTri"><li>Darth Maul</li></Link>
                    <Link to="/LikSest"><li>Yoda</li></Link>
                </ul>
            </div>
            <div className="sadrzaj">
                <Link to="/Djelovi"><h1>Films</h1></Link>
                <Link to="/PrviDio">
                    <div id="trenutno" className="filmovi">
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