import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/winduOne.jpg";
import slikaTwo from "./Slike/winduTwo.jpg";
import slikaThree from "./Slike/winduThree.jpg";

export default function LikPet(){
    let name = "Mace Windu";
    let species = "Human";
    let homeworld = "Haruun Kal";
    let gender = "Male";
    let born = "72 BBY";
    let died = "19 BBY";
    let affiliation = "Jedi Order";
    let description = "Mace Windu was a revered human male Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic. He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic.";
    let actor = "Samuel L. Jackson";
    let o = "Samuel L. Jackson";
    let poveznica = "https://www.imdb.com/name/nm0000168/";
    let Instagram = "https://www.instagram.com/SamuelLJackson";
    let Facebook = "https://www.facebook.com/samuelljackson";
    let YouTube = "https://www.bing.com/videos/search?q=samuel+l.+jackson+youtube+star+wars&docid=608021658149331612&mid=0B63F10686F4FD96801B0B63F10686F4FD96801B&view=detail&FORM=VIRE";
    let Wikipedia = "https://en.wikipedia.org/wiki/Samuel_L._Jackson";
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