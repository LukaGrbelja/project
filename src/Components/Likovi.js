import React from "react";
import Header from "./Header";
import Slideshow from "./SlideShow";

export default function Likovi({Name,Species,Homeworld,Born,Died,Affiliation,Description,Gender,Actor,SlikaJedan,SlikaDva,SlikaTri}){
    return(
        <div>
            <Header/>
            <div className="likovi">
                <div className="slikaLikovi">
                    <Slideshow prva={SlikaJedan} druga={SlikaDva} treca={SlikaTri}/>
                </div>
                <div className="detaljiLikovi">
                    Name : {Name}<br></br>
                    Homeworld : {Homeworld}<br></br>
                    Born : {Born}<br></br>
                    Died : {Died}<br></br>
                    Species : {Species}<br></br>
                    Gender : {Gender}<br></br>
                    Affiliation : {Affiliation}<br></br>
                    Actor : {Actor}
                </div>
                <div>
                    About : {Description}
                </div>
            </div>
        </div>
        );
}