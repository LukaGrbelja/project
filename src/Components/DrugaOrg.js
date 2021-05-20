import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Naslovna from "./Slike/DrugaOrgNasl.jpg";
import {Link} from "react-router-dom";

export default function DrugaOrg(){
    return(
        <div>
            <Header/>
            <div className="sadrzaj">
                <center><img className="naslovna" src={Naslovna}/></center>
            </div>
            <div className="sadrzaj">
                <h1>About</h1>
                <p>
                    The Trade Federation was an interstellar shipping and trade conglomerate during the waning years of the Galactic 
                    Republic, one so powerful that it had its own representatives in the Galactic Senate. 
                    Viceroy Nute Gunray secretly allied with the Sith Lord Darth Sidious to invade the peaceful planet of Naboo 
                    and cause a crisis in the Republic government, although his occupation was thwarted by Queen Padmé Amidala 
                    and her forces. Escaping imprisonment, Gunray pledged his droid forces to the Confederacy of Independent Systems, 
                    and the Federation fought Republic and Jedi armies throughout the Clone Wars. 
                    Gunray and his fellow Separatist Council members were killed by Darth Vader at the end of the war, 
                    and the Trade Federation was nationalized by the newly-formed Galactic Empire.
                    The Federation would often force planets into exclusive contracts, 
                    which in several circumstances gave them the ability to blockade planets and control system politics.
                </p>
            </div>
            <div className="sadrzaj">
                <h1>Members</h1>
                <ul>
                    <Link to="/LikDva"><li>Darth Sidious</li></Link>
                    <Link to="/LikTri"><li>Darth Maul</li></Link>
                    <Link to="/LikCetiri"><li>Viceroy Nute Gunray</li></Link>
                    <Link to="/LikDeset"><li>General Grievous</li></Link>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}