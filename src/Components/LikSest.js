import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/yodaOne.jpg";
import slikaTwo from "./Slike/yodaTwo.jpg";
import slikaThree from "./Slike/yodaThree.jpg";

export default function LikSest(){
    let name = "Yoda";
    let species = "????";
    let homeworld = "?????";
    let gender = "Male";
    let born = "896 BBY";
    let died = "4 ABY";
    let affiliation = "Jedi Order";
    let description = "Yoda, a Force-sensitive male being belonging to a mysterious species, was a legendary Jedi Master who witnessed the rise and fall of the Galactic Republic, followed by the rise of the Galactic Empire. Small in stature but revered for his wisdom and power, Yoda trained generations of Jedi, ultimately serving as the Grand Master of the Jedi Order. Having lived through nine centuries of galactic history, he played integral roles in the Clone Wars, the rebirth of the Jedi through Luke Skywalker, and unlocking the path to immortality.";
    let actor = "Frank Oz";
    let o = "Frank Oz";
    let poveznica = "https://www.imdb.com/name/nm0000568/";
    let Instagram = "/LikSest";
    let Facebook = "/LikSest";
    let YouTube = "https://www.bing.com/videos/search?q=frank+oz+youtube&docid=608043253249767999&mid=31A39C33A85F810B53D131A39C33A85F810B53D1&view=detail&FORM=VIRE";
    let Wikipedia = "https://en.wikipedia.org/wiki/Frank_Oz";
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