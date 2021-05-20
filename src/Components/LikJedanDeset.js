import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/padmeOne.jpg";
import slikaTwo from "./Slike/padmeTwo.jpg";
import slikaThree from "./Slike/padmeThree.jpg";

export default function LikJedanDeset(){
    let name = "Padmé Amidala";
    let species = "Human";
    let homeworld = "Naboo";
    let gender = "Male";
    let born = "46 BBY";
    let died = "19 BBY";
    let affiliation = "Galactic Republicn";
    let description = "Padmé Amidala Naberrie was a human female senator who represented the people of Naboo during the final years of the Galactic Republic. Prior to her career in the Galactic Senate, Amidala was the elected ruler of the Royal House of Naboo. A political idealist, she advocated for the preservation of democracy as well as a peaceful resolution to the Clone Wars. However, her secret marriage to the Jedi Knight Anakin Skywalker would have a lasting effect on the future of the galaxy for decades to come.";
    let actor = "Natalie Portman";
    let o = "Natalie Portman";
    let poveznica = "https://www.imdb.com/name/nm0000204/";
    let YouTube = "https://www.youtube.com/watch?v=8raKXwDvMyc";
    let Facebook = "https://www.facebook.com/natalieportmandotcom/";
    let Instagram = "https://www.instagram.com/natalieportman";
    let Wikipedia = "https://en.wikipedia.org/wiki/Natalie_Portman";
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