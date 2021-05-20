import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/gunrayOne.jpg";
import slikaTwo from "./Slike/gunrayTwo.jpg";
import slikaThree from "./Slike/gunrayThree.png";

export default function LikCetiri(){
    let name = "Nute Gunray";
    let species = "Neimoidian";
    let homeworld = "Neimoidia";
    let gender = "Male";
    let born = "??? BBY";
    let died = "19 BBY";
    let affiliation = "Trade Federation";
    let description = "Nute Gunray was a Neimoidian male who served as the Viceroy of the Trade Federation and a high-ranking member of the Separatist Confederacy of Independent Systems and chairman of the Separatist Council. Gunray led the Trade Federation through its invasion of the planet Naboo, at the behest of the Sith Lord Darth Sidious—who was secretly Sheev Palpatine, the Senator of Naboo, and who had engineered the conflict to be elected Supreme Chancellor. The Federation invasion was repelled and Gunray was arrested, but he avoided punishment after four trials in the Supreme Court.";
    let actor = "Silas Carson";
    let o = "Silas Carson";
    let poveznica = "https://www.imdb.com/name/nm0141324/";
    let Instagram = "/LikCetiri";
    let Facebook = "/LikCetiri";
    let YouTube = "https://www.youtube.com/watch?v=IqrN5oPM_tc";
    let Wikipedia = "https://en.wikipedia.org/wiki/Silas_Carson";
    return(
        <div>
            <Likovi Name={name} Gender={gender} Species={species} Actor={actor} Homeworld={homeworld} Born={born} Died={died} Affiliation={affiliation} Description={description} SlikaJedan={slikaOne} SlikaDva={slikaTwo} SlikaTri={slikaThree}/>
            <ViseO 
                    vise={o}
                    sluzbeno={poveznica} 
                    instagram={Instagram} 
                    facebook={Facebook}
                    youtube={YouTube}
                    wikipedia={Wikipedia}
            />
            <Footer/>
        </div>
        );
}