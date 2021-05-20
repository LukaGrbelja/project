import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/obiwanOne.jpg";
import slikaTwo from "./Slike/obiwanTwo.jpg";
import slikaThree from "./Slike/obiwanThree.jpg";

export default function LikOsam(){
    let name = "Obi-Wan Kenobi";
    let species = "Human";
    let homeworld = "Stewjon";
    let gender = "Male";
    let born = "57 BBY";
    let died = "0 BBY";
    let affiliation = "Jedi Order";
    let description = "Obi-Wan Kenobi was a Force-sensitive legendary human male Jedi Master who served on the Jedi High Council during the last years of the Republic Era. During the Imperial Era, he adopted the alias Ben Kenobi in order to hide from the regime that drove the Jedi to near extinction. A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY.";
    let actor = "Ewan McGregor";
    let o = "Ewan McGregor";
    let poveznica = "https://www.imdb.com/name/nm0000191/";
    let YouTube = "https://www.bing.com/videos/search?q=ewan+mcgregor+youtube+starwars&docid=13838560768618&mid=4F2C3C5B9F7B59A5AA5B4F2C3C5B9F7B59A5AA5B&view=detail&FORM=VIRE";
    let Facebook = "https://www.facebook.com/EwanMcGregor.official/";
    let Instagram = "https://www.instagram.com/ewanmcgregoronly";
    let Wikipedia = "https://en.wikipedia.org/wiki/Ewan_McGregor";
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