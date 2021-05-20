import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/ginOne.jpg";
import slikaTwo from "./Slike/ginTwo.jpg";
import slikaThree from "./Slike/ginThree.png";

export default function LikDevet(){
    let name = "Qui-Gon Jinn";
    let species = "Human";
    let homeworld = "Coruscant";
    let gender = "Male";
    let born = "80 BBY";
    let died = "32 BBY";
    let affiliation = "Jedi Order";
    let description = "Born on the Core World Coruscant, the capital of the Galactic Republic in around 80 BBY, Jinn eventually learned the ways of the Force as the Padawan of Jedi Master Dooku before ultimately attaining the rank of Jedi Knight. He would go on to take an apprentice of his own, Obi-Wan Kenobi, who adhered to the principles of the Jedi Code more than his own master.";
    let actor = "Liam Neeson";
    let o = "Liam Neeson";
    let poveznica = "https://www.imdb.com/name/nm0000553/";
    let YouTube = "https://www.youtube.com/watch?v=z_mkwCVeyJs";
    let Facebook = "https://www.facebook.com/LiamNFanpage";
    let Instagram = "https://www.instagram.com/neeson_liam";
    let Wikipedia = "https://en.wikipedia.org/wiki/Liam_Neeson";
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