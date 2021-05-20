import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/palpatinOne.jpg";
import slikaTwo from "./Slike/palpatinTwo.jpg";
import slikaThree from "./Slike/palpatinThree.jpg";

export default function LikDva(){
    let name = "Darth Sidious,Sheev Palpatine";
    let species = "Human";
    let homeworld = "Naboo";
    let gender = "Male";
    let born = "84 BBY";
    let died = "4 ABY";
    let affiliation = "Trade Federation,Galactic Republic,Sith";
    let description = "Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Republic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career. He orchestrated the fall of the Galactic Republic and the Jedi Order through the Clone Wars, and then established his reign over the galaxy which lasted until his death at the Battle of Endor. However, the dark side of the Force gave rise to powers which allowed the Emperor to return from the grave.";
    let actor = "Ian McDiarmid";
    let o = "Ian McDiarmid";
    let poveznica = "https://www.imdb.com/name/nm0001519/";
    let Instagram = "https://www.instagram.com/ian.mcdiarmid";
    let Facebook = "https://www.prod.facebook.com/IanMcDiarmidOfficial/";
    let YouTube = "https://www.bing.com/videos/search?q=ian+mcdiarmid+youTube&docid=608018488466679137&mid=FF64934432D16CDC23A6FF64934432D16CDC23A6&view=detail&FORM=VIRE";
    let Wikipedia = "https://en.wikipedia.org/wiki/Ian_McDiarmid";
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