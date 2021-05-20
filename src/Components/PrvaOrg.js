import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlikaJedan from "./Slike/PrvaOrgNasl.jpeg";
import {Link} from "react-router-dom";

export default function PrvaOrg(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img className="naslovna" src={SlikaJedan}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About</h1>
                <p>
                    The Jedi Order was a noble religious order of protectors united in their devotion to the light side of the Force. 
                    With a history dating back thousands of years before the rise of the Galactic Empire, 
                    the Jedi Knights—noted for their lightsabers and natural ability to harness the powers of the Force—stood as 
                    the guardians of peace and justice in the Galactic Republic. 
                    The Order was originally established on Ahch-To in the Unknown Regions. 
                    In later years, the Jedi Grand Temple on the Core World Coruscant served as the hub of all Jedi activity 
                    in the galaxy.
                </p>
                <h1>Grand Master</h1>
                <p>
                    Grand Master was a title generally bestowed on the oldest and wisest member of the Jedi Order. 
                    Whereas the Master of the Order served as leader of the Jedi High Council, 
                    the Grand Master was the head of the Jedi Order. During some eras of Jedi history, such as the High Republic Era, 
                    the Order had multiple Grand Masters at the same time. Yoda, 
                    a Jedi Master who had lived for over eight centuries by the time of the Clone Wars, 
                    was the Grand Master of the Jedi Order during the reign of the Galactic Republic.
                </p>
                <h1>The Jedi High Council</h1>
                <p>
                    The Jedi High Council, simply known as the Jedi Council, 
                    was a body of twelve Jedi Masters that governed the Jedi Order. 
                    Headquartered in the Jedi Grand Temple on Coruscant, 
                    the High Council worked with the Galactic Senate to maintain peace and justice in the Galactic Republic. 
                    In addition, the High Council tracked the progress of the Jedi training of Padawans, 
                    deciding when the time was right for an apprentice to undergo the Jedi Trials in order to attain the rank 
                    of Jedi Knight, and from there, the rank of Master. 
                    The High Council also enforced the Jedi Code and traditionally selected its own members, 
                    including the Master of the Order who functioned as the body's presiding officer. During the late Republic Era, 
                    legendary Jedi Masters such as Mace Windu, Ki-Adi-Mundi, and Grand Master Yoda comprised the High Council.
                </p>
                <h1>Other Positions</h1>
                <p>
                    <ul>
                        <li>Master of the Order</li>
                        <li>Jedi Master</li>
                        <li>Jedi Knight</li>
                        <li>Padawan</li>
                        <li>Jedi youngling</li>
                    </ul>
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Members</h1>
                <ul>
                    <Link to="/LikPet"><li>Mace Windu</li></Link>
                    <Link to="/LikSest"><li>Yoda</li></Link>
                    <Link to="/LikSedam"><li>Ki-Adi-Mundi</li></Link>
                    <Link to="/LikOsam"><li>Obi-Wan Kenobi</li></Link>
                    <Link to="/LikJedan"><li>Anakin Skywalker</li></Link>
                    <Link to="/LikDevet"><li>Qui-Gon Jinn</li></Link>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}