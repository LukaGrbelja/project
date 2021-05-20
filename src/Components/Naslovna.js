import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SlikaJedan from "./Slike/prviDio.jpg";
import SlikaDva from "./Slike/drugiDio.jpg";
import SlikaTri from "./Slike/treciDio.jpg";
import SlikaCetiri from "./Slike/prvaOrg.jpg";
import SlikaPet from "./Slike/drugaOrg.jpg";
import SlikaSest from "./Slike/trecaOrg.jpeg";
import Footer from "./Footer";
import ViseO from "./ViseO";

export default function Naslovna(){
    let o = "Star Wars";
    let poveznicaStarWarsSluzbena = "https://www.starwars.com/";
    let StarWarsInstagram = "https://www.instagram.com/starwars";
    let StarWarsFacebook = "https://www.facebook.com/StarWars/";
    let StarWarsYouTube = "https://www.youtube.com/%20star%20wars";
    let StarWarsWikipedia = "https://en.wikipedia.org/wiki/Star_Wars";
    let oLF = "Lucasfilm";
    let poveznicaLucasFilmLTDSluzbena = "https://www.lucasfilm.com/";
    let LucasFilmLTDInstagram = "https://www.instagram.com/Lucasfilm";
    let LucasFilmLTDFacebook = "https://www.facebook.com/lucasfilm/";
    let LucasFilmLTDYouTube = "https://www.youtube.com/channel/UCnwY6fAhE3ePu0F2nMP-DLg";
    let LucasFilmLTDWikipedia = "https://en.wikipedia.org/wiki/Lucasfilm";
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <h1>About Star Wars</h1>
                <p>
                    Star Wars is an American epic space opera media franchise created by George Lucas, 
                    which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. 
                    The franchise has been expanded into various films and other media, including television series, video games, 
                    novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. 
                    In 2020, its total value was estimated at US$70 billion, 
                    and it is currently the fifth-highest-grossing media franchise of all time.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>About Star Wars prequel trilogy</h1>
                <p>
                The Star Wars prequel trilogy, colloquially referred to as the prequels, 
                is a series of epic space-opera films written and directed by George Lucas. 
                It was produced by Lucasfilm Ltd. and distributed by 20th Century Fox. 
                The trilogy was released from 1999 to 2005 and is set before the original Star Wars trilogy, 
                making it the first act of the Skywalker saga, despite being the second released. 
                Lucas had planned a prequel trilogy before the release of the original film, 
                but halted major Star Wars films beyond the original trilogy by 1981. 
                With the subsequent advances of computer-generated imagery, Lucas revived plans for the prequels by the early 1990s. 
                The trilogy marked Lucas's return to directing after a 22-year hiatus following the original Star Wars in 1977.
                </p>
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
                    <div className="filmovi">
                        <img src={SlikaTri} className="dijelovi"/>
                        Star Wars: Episode III – Revenge of the Sith
                    </div>
                </Link>
            </div>
            <div className="sadrzaj">
                <h1>Largest organizations in Star Wars</h1>
                <Link to="/PrvaOrga">
                    <div className="orgs">
                        <img src={SlikaCetiri} className="orgimg"/>
                        Jedi Order
                    </div>
                </Link>
                <Link to="/DrugaOrg">
                    <div className="orgs">
                        <img src={SlikaPet} className="orgimg"/>
                        Trade Federation
                    </div>
                </Link>
                <Link to="/TrecaOrg">
                    <div className="orgs">
                        <img src={SlikaSest} className="orgimg"/>
                        Galactic Republic
                    </div>
                </Link>
            </div>
            <div className="sadrzaj">
                <h1>Lucasfilm Ltd</h1>
                <p>
                    Star Wars prequel trilogy was produced by Lucasfilm Ltd. Founded by visionary filmmaker George Lucas in 1971, 
                    Lucasfilm established itself as a “rebel base” of sorts in San Francisco’s Bay Area, 
                    a place the filmmaker chose to “shake up the status quo…of how movies were made and what they were about.” 
                    It was a defiant departure from the Hollywood mainstream and a more conducive atmosphere to cultivate his 
                    independent spirit of filmmaking.With money earned from his third motion picture, 1977’s blockbuster Star Wars, 
                    Lucas was able to construct Skywalker Ranch in San Francisco’s North Bay in the early ‘80s, 
                    a place where filmmakers could work together sharing ideas and experience.
                </p>
                <b>Director:</b>
                <ul>
                    <li>George Lucas</li>
                </ul>
                <b>Writer:</b>
                <ul>
                    <li>George Lucas</li>
                    <li>Jonathan Hales</li>
                </ul>
                <b>Producents:</b>
                <ul>
                    <li>George Lucas</li>
                    <li>Rick McCallum</li>
                    <li>Lorne Orleans</li>
                </ul>
                <b>Cinematography by:</b>
                <ul>
                    <li>David Tattersall</li>
                </ul>
                <b>Music by:</b>
                <ul>
                    <li>John Williams</li>
                </ul>
                <ViseO 
                    vise={oLF}
                    sluzbeno={poveznicaLucasFilmLTDSluzbena} 
                    instagram={LucasFilmLTDInstagram} 
                    facebook={LucasFilmLTDFacebook}
                    youtube={LucasFilmLTDYouTube}
                    wikipedia={LucasFilmLTDWikipedia}
                />
            </div>
                <ViseO 
                    vise={o}
                    sluzbeno={poveznicaStarWarsSluzbena} 
                    instagram={StarWarsInstagram} 
                    facebook={StarWarsFacebook}
                    youtube={StarWarsYouTube}
                    wikipedia={StarWarsWikipedia}
                />
            <Footer/>
        </div>
    );
}