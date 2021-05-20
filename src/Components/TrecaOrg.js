import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Naslovna from "./Slike/TrecaOrgNasl.jpg";
import {Link} from "react-router-dom";

export default function TrecaOrg(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img className="naslovna" src={Naslovna}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About</h1>
                <p>
                    The Galactic Republic, also known as the Grand Republic or simply as the Republic, 
                    was a democratic union comprising thousands of star systems spread across the galaxy. 
                    Old Republic was a term affixed to the pre-modern Republic that existed until 1032 BBY, 
                    and the modern Republic that was supplanted by the Galactic Empire in 19 BBY. In addition, 
                    the term High Republic denoted the era in which the Republic reached the zenith of its power from 300 BBY to 82 BBY. 
                    The Republic was founded many millennia before the Battle of Yavin, approximately 25,000 BBY, 
                    around the same time as the Jedi Order. The Galactic Senate governed the Republic under the Galactic Constitution, 
                    and comprised thousands of senators representing the Republic's member worlds. 
                    The Supreme Chancellor was the title of the Republic head of state, 
                    elected from ranks of the Senate to lead the government on Coruscant. 
                    An ecumenopolis or city-covered planet, referred to as Galactic City, 
                    Coruscant was the capital of the Republic and therefore the seat of the Senate.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Members</h1>
                <ul>
                    <Link to="/LikJedanDeset"><li>Padmé Amidala</li></Link>
                    <Link to="/LikDva"><li>Palpatine</li></Link>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}