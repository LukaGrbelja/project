import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/ggOne.jpg";
import slikaTwo from "./Slike/ggTwo.jpg";
import slikaThree from "./Slike/ggThree.jpg";

export default function LikDeset(){
    let name = "Grievous";
    let species = "Kaleesh";
    let homeworld = "Kalee";
    let gender = "Male";
    let born = "????";
    let died = "19 BBY";
    let affiliation = "Trade Federation";
    let description = "Grievous, born as Qymaen jai Sheelal, was a Kaleesh male warlord who served as a commanding officer in the military forces of the Confederacy of Independent Systems during the last years of the Galactic Republic. Although he was known by his rank as a general, Grievous was the Supreme Commander of the Separatist Droid Army that engaged the Grand Army of the Republic throughout the pan-galactic conflict of the Clone Wars. Noted for his ruthlessness and extensive cybernetic enhancements, Grievous inspired fear as he traveled across the galaxy, invading entire worlds and engaging the Jedi Knights of the Republic.";
    let actor = "Matthew Wood";
    let o = "Matthew Wood";
    let poveznica = "https://www.imdb.com/name/nm0003214/";
    let YouTube = "https://www.bing.com/videos/search?q=matthew+wood+youtube+starwars&docid=607986671361527380&mid=60469C64EBCB1DF9763E60469C64EBCB1DF9763E&view=detail&FORM=VIRE";
    let Facebook = "/LikDeset";
    let Instagram = "https://www.instagram.com/matthewood";
    let Wikipedia = "https://en.wikipedia.org/wiki/Matthew_Wood_(sound_editor)";
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