import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/anakinOne.jpg";
import slikaTwo from "./Slike/anakinTwo.jpg";
import slikaThree from "./Slike/anakinThree.jpg";

export default function LikJedan(){
    let name = "Anakin Skywalker";
    let species = "Human";
    let homeworld = "Tatooine";
    let gender = "Male";
    let born = "41 BBY";
    let died = "4 ABY";
    let affiliation = "Jedi Order,Sith";
    let description = "Anakin Skywalker was a legendary human male Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.";
    let actor = "Hayden Christensen";
    let o = "Hayden Christensen";
    let poveznica = "https://www.imdb.com/name/nm0159789/";
    let Instagram = "https://www.instagram.com/haydenchristensen";
    let Facebook = "https://www.facebook.com/officialhaydenchristensen/";
    let YouTube = "https://www.youtube.com/watch?v=_zKSNSXzGuQ";
    let Wikipedia = "https://en.m.wikipedia.org/wiki/Hayden_Christensen";
    return(
        <div>
            <Likovi Name={name} Gender={gender} Species={species} Actor={actor} Homeworld={homeworld} 
            Born={born} Died={died} Affiliation={affiliation} Description={description} SlikaJedan={slikaOne} 
            SlikaDva={slikaTwo} SlikaTri={slikaThree}/>
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